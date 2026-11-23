#!/usr/bin/env node
// What each generated document was built from, so that only the documents that need it are regenerated.
//
//   NODE_USE_ENV_PROXY=1 node scripts/sources.mjs record <app> [<config> ...] [--failed "<error>"]
//   NODE_USE_ENV_PROXY=1 node scripts/sources.mjs check [<app> ...]
//
// record: fetches the OpenAPI document of each config (default: every config of the app) and every file it
//   references, resolved by the same parser hono-takibi uses, and writes into apps/<app>/generated.json:
//   the ETag and sha256 of each file, the sha256 of the config, the hono-takibi version installed for the
//   app, the date, and whether the output exists. The typecheck result in the same entry is kept.
//   With --failed "<error>" (scripts/regen.sh, when generation fails), the entry keeps describing the previous
//   outputs and gets `failed: { hono-takibi, date, error }`, so that `check` waits for the next change.
// check: asks every recorded URL whether it changed (If-None-Match with the recorded ETag; otherwise a download
//   compared by sha256, and for JSON also by a canonical form, see canonical()) and prints one line per config
//   to regenerate, `<app>\t<config>\t<reason>`.
//   A config that changed, or one with no entry yet, is listed too. URLs that fail are reported on stderr
//   and do not count as a change.
//
// Run it from the repository root after `bun install`. NODE_USE_ENV_PROXY=1 makes fetch use the proxy.
import { createHash } from 'node:crypto'
import fs from 'node:fs'
import { createRequire } from 'node:module'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const appsDir = path.join(root, 'apps')

const sha256 = (buf) => createHash('sha256').update(buf).digest('hex')

// Some servers build the document on every request: Hugging Face puts the request time into parameter defaults,
// Twitter returns the scopes of a security requirement in a random order. For a JSON document, a second
// fingerprint ignores key order, the order of arrays of plain values, and the value of ISO date-time strings,
// and a document whose bytes changed but whose canonical form did not counts as unchanged.
const DATE_TIME = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:?\d{2})?$/
function canonical(value) {
  if (Array.isArray(value)) {
    const items = value.map(canonical)
    return items.every((v) => v === null || typeof v !== 'object')
      ? items.map((v) => JSON.stringify(v)).sort().map((v) => JSON.parse(v))
      : items
  }
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value).sort().map((k) => [k, canonical(value[k])]))
  }
  return typeof value === 'string' && DATE_TIME.test(value) ? '<date-time>' : value
}
function canonicalSha256(buf) {
  try {
    return sha256(JSON.stringify(canonical(JSON.parse(buf.toString('utf8')))))
  } catch {
    return undefined // not JSON
  }
}
function fingerprint(buf, etag) {
  const c = canonicalSha256(buf)
  return { ...(etag ? { etag } : {}), sha256: sha256(buf), ...(c ? { canonical: c } : {}) }
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

/** Every config of an app, as a path relative to the app directory. */
export function configsOf(app) {
  const dir = path.join(appsDir, app)
  const found = []
  if (fs.existsSync(path.join(dir, 'hono-takibi.config.ts'))) found.push('hono-takibi.config.ts')
  const configs = path.join(dir, 'configs')
  if (fs.existsSync(configs)) {
    for (const f of fs.readdirSync(configs).sort()) if (f.endsWith('.config.ts')) found.push(`configs/${f}`)
  }
  return found
}

/** The input URL and the routes output of a config (the first `output:` is the routes one). */
export function readConfig(app, config) {
  const text = fs.readFileSync(path.join(appsDir, app, config), 'utf8')
  return {
    text,
    input: text.match(/input:\s*'([^']+)'/)?.[1],
    output: text.match(/output:\s*'([^']+)'/)?.[1],
  }
}

export function loadManifest(app) {
  const p = path.join(appsDir, app, 'generated.json')
  return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : {}
}

export function saveManifest(app, manifest) {
  const sorted = Object.fromEntries(Object.keys(manifest).sort().map((k) => [k, manifest[k]]))
  fs.writeFileSync(path.join(appsDir, app, 'generated.json'), `${JSON.stringify(sorted, null, 2)}\n`)
}

const listApps = () =>
  fs
    .readdirSync(appsDir)
    .filter((d) => configsOf(d).length > 0)
    .sort()

function honoTakibiVersion(app) {
  const pkg = path.join(appsDir, app, 'node_modules/hono-takibi/package.json')
  return JSON.parse(fs.readFileSync(fs.realpathSync(pkg), 'utf8')).version
}

async function fetchRetry(url, init = {}) {
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await fetch(url, { ...init, signal: AbortSignal.timeout(300_000) })
      if ((res.status === 429 || res.status >= 500) && attempt < 4) {
        await sleep(2000 * attempt)
        continue
      }
      return res
    } catch (e) {
      if (attempt >= 4) throw e
      await sleep(2000 * attempt)
    }
  }
}

let swaggerParser
function parser(app) {
  if (swaggerParser) return swaggerParser
  const htDir = fs.realpathSync(path.join(appsDir, app, 'node_modules/hono-takibi'))
  const m = createRequire(path.join(htDir, 'noop.js'))('@apidevtools/swagger-parser')
  swaggerParser = m.default ?? m
  return swaggerParser
}

/** Fetch the document and every file it references; returns url -> { etag?, sha256 }. */
async function fetchSources(app, input) {
  const seen = new Map()
  const read = async (file) => {
    const res = await fetchRetry(file.url)
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${file.url}`)
    const buf = Buffer.from(await res.arrayBuffer())
    seen.set(file.url, fingerprint(buf, res.headers.get('etag')))
    return buf
  }
  try {
    await parser(app).resolve(input, { resolve: { http: { order: 1, canRead: /^https?:\/\//i, read } } })
  } catch (e) {
    // A document hono-takibi cannot read is still recorded as far as it was fetched, so that a fix in it is
    // noticed. Only a document that could not be fetched at all is an error.
    if (seen.size === 0) throw e
  }
  return Object.fromEntries([...seen.entries()].sort(([a], [b]) => a.localeCompare(b)))
}

async function record(app, configs, failed) {
  const manifest = loadManifest(app)
  const version = honoTakibiVersion(app)
  const date = new Date().toISOString().slice(0, 10)
  let notRecorded = 0
  await pool(configs.length ? configs : configsOf(app), 4, async (config) => {
    const { text, input, output } = readConfig(app, config)
    try {
      if (!input) throw new Error('no input')
      const sources = await fetchSources(app, input)
      const previous = manifest[config] ?? {}
      manifest[config] = failed
        ? // Generation failed: the outputs are still the previous ones, so keep what describes them, and record the
          // sources it failed on, so that `check` waits for the next change.
          {
            'hono-takibi': previous['hono-takibi'] ?? version,
            date: previous.date ?? date,
            generated: previous.generated ?? Boolean(output && fs.existsSync(path.join(appsDir, app, output))),
            config: sha256(text),
            sources,
            failed: { 'hono-takibi': version, date, error: failed },
            ...(previous.typecheck ? { typecheck: previous.typecheck } : {}),
          }
        : {
            'hono-takibi': version,
            date,
            generated: Boolean(output && fs.existsSync(path.join(appsDir, app, output))),
            config: sha256(text),
            sources,
            ...(previous.typecheck ? { typecheck: previous.typecheck } : {}),
          }
      console.log(`${app}\t${config}\t${Object.keys(sources).length} file(s)`)
    } catch (e) {
      notRecorded++
      console.error(`${app}\t${config}\tnot recorded: ${String(e.message).split('\n')[0]}`)
    }
  })
  saveManifest(app, manifest)
  if (notRecorded) process.exitCode = 1
}

/** Run `fn` over `items` with at most `n` at a time. */
async function pool(items, n, fn) {
  let next = 0
  await Promise.all(
    Array.from({ length: Math.min(n, items.length) }, async () => {
      while (next < items.length) await fn(items[next++])
    }),
  )
}

async function check(apps) {
  const units = []
  for (const app of apps.length ? apps : listApps()) {
    const manifest = loadManifest(app)
    for (const config of configsOf(app)) units.push({ app, config, entry: manifest[config] })
  }
  const reasons = new Map()
  const flag = (u, reason) => {
    const key = `${u.app}\t${u.config}`
    if (!reasons.has(key)) reasons.set(key, reason)
  }
  const requests = []
  for (const u of units) {
    if (!u.entry) {
      flag(u, 'not recorded')
      continue
    }
    if (sha256(readConfig(u.app, u.config).text) !== u.entry.config) flag(u, 'config changed')
    for (const [url, rec] of Object.entries(u.entry.sources ?? {})) requests.push({ u, url, rec })
  }
  await pool(requests, 8, async ({ u, url, rec }) => {
    try {
      const res = await fetchRetry(url, rec.etag ? { headers: { 'If-None-Match': rec.etag } } : {})
      if (res.status === 304) return
      if (!res.ok) {
        console.error(`${u.app}\t${u.config}\tHTTP ${res.status}\t${url}`)
        return
      }
      const same = (buf) => sha256(buf) === rec.sha256 || (rec.canonical && canonicalSha256(buf) === rec.canonical)
      if (same(Buffer.from(await res.arrayBuffer()))) return
      // Some hosts serve different builds in turn (Twelve Data: schema names differ between its servers). Ask
      // again a few times before calling it a change.
      for (let i = 0; i < 5; i++) {
        const again = await fetchRetry(url)
        if (again.ok && same(Buffer.from(await again.arrayBuffer()))) {
          console.error(`${u.app}\t${u.config}\tvaries between requests (the recorded content came back)\t${url}`)
          return
        }
      }
      flag(u, `source changed: ${url}`)
    } catch (e) {
      console.error(`${u.app}\t${u.config}\t${e.message}\t${url}`)
    }
  })
  for (const u of units) {
    const key = `${u.app}\t${u.config}`
    if (reasons.has(key)) console.log(`${key}\t${reasons.get(key)}`)
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === import.meta.filename) {
  const [command, ...rest] = process.argv.slice(2)
  const failedIdx = rest.indexOf('--failed')
  const failed = failedIdx >= 0 ? rest.splice(failedIdx, 2)[1] : undefined
  if (command === 'record' && rest.length) await record(rest[0], rest.slice(1), failed)
  else if (command === 'check') await check(rest)
  else {
    console.error('usage: node scripts/sources.mjs record <app> [<config> ...] [--failed "<error>"] | check [<app> ...]')
    process.exit(2)
  }
}
