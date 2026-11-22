#!/usr/bin/env node
// Preflight and sanity probe for one OpenAPI document, using the same parser stack as hono-takibi
// (@apidevtools/swagger-parser, which is a dependency of hono-takibi).
//
//   node scripts/probe-spec.mjs <url-or-path> [--app apps/<name>]
//
// Run it from the repository root after `bun install`. Without --app it borrows the parser from the
// first app that has node_modules. With --app and an existing src/routes.ts it also compares the number
// of operations in the document with the number of createRoute() calls that hono-takibi generated.
//
// Exit codes: 0 usable, 3 the document cannot be parsed, 4 Swagger 2.0 / not OpenAPI 3.x, 5 over the
// 50 MB download limit of hono-takibi. WARN lines are signals to investigate, not proof of a bug.
import { createHash } from 'node:crypto'
import fs from 'node:fs'
import { createRequire } from 'node:module'
import path from 'node:path'

const args = process.argv.slice(2)
const appIdx = args.indexOf('--app')
const appDir = appIdx >= 0 ? args.splice(appIdx, 2)[1] : undefined
const target = args[0]
if (!target) {
  console.error('usage: node scripts/probe-spec.mjs <url-or-path> [--app apps/<name>]')
  process.exit(2)
}

const root = path.resolve(import.meta.dirname, '..')
const host = appDir
  ? path.resolve(appDir)
  : fs
      .readdirSync(path.join(root, 'apps'))
      .map((d) => path.join(root, 'apps', d))
      .find((d) => fs.existsSync(path.join(d, 'node_modules/hono-takibi')))
if (!host || !fs.existsSync(path.join(host, 'node_modules/hono-takibi'))) {
  console.error('hono-takibi is not installed: run `bun install` first')
  process.exit(2)
}
const htDir = fs.realpathSync(path.join(host, 'node_modules/hono-takibi'))
const SwaggerParser = ((m) => m.default ?? m)(
  createRequire(path.join(htDir, 'noop.js'))('@apidevtools/swagger-parser'),
)

const LIMIT = 50 * 1024 * 1024
const say = (label, value) => console.log(`${label.padEnd(9)}: ${value}`)

// 1. Download size and fingerprint (the fingerprint goes into commit messages for reproducibility).
let bytes
if (/^https?:\/\//.test(target)) {
  const res = await fetch(target)
  if (!res.ok) {
    say('spec', `${target} -> HTTP ${res.status}`)
    process.exit(3)
  }
  bytes = Buffer.from(await res.arrayBuffer())
} else {
  bytes = fs.readFileSync(target)
}
say('spec', target)
say('bytes', `${bytes.length}  sha256 ${createHash('sha256').update(bytes).digest('hex').slice(0, 16)}`)
if (bytes.length > LIMIT) {
  say('verdict', `over the ${LIMIT / 1024 / 1024} MB download limit of hono-takibi`)
  process.exit(5)
}

// 2. Parse and bundle exactly like hono-takibi's dependency does.
let doc
let files
try {
  doc = await SwaggerParser.bundle(target)
  files = (await SwaggerParser.resolve(target)).paths().length
} catch (e) {
  say('verdict', `cannot be parsed: ${String(e.message).split('\n')[0]}`)
  process.exit(3)
}

if (doc.swagger) {
  say('kind', `swagger ${doc.swagger}`)
  say('verdict', 'unsupported by design: hono-takibi reads OpenAPI 3.x (do NOT file an issue)')
  process.exit(4)
}
if (!String(doc.openapi ?? '').startsWith('3.')) {
  say('kind', `openapi ${doc.openapi ?? '(missing)'}`)
  say('verdict', 'not an OpenAPI 3.x document')
  process.exit(4)
}

// 3. Shape of the document.
const METHODS = ['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace']
const operations = Object.values(doc.paths ?? {}).flatMap((p) => METHODS.filter((m) => p?.[m])).length
say('kind', `openapi ${doc.openapi}`)
say('title', `${JSON.stringify(doc.info?.title ?? '')}  version ${JSON.stringify(String(doc.info?.version ?? ''))}`)
say('servers', JSON.stringify((doc.servers ?? []).map((s) => s.url)).slice(0, 160))
say(
  'size',
  `paths=${Object.keys(doc.paths ?? {}).length} operations=${operations} schemas=${Object.keys(doc.components?.schemas ?? {}).length} webhooks=${Object.keys(doc.webhooks ?? {}).length} files=${files}`,
)

// 4. $ref shapes that hono-takibi has mishandled before (see issue-drafts/ and docs/daily-routine.md).
const deep = new Set()
const foreign = new Set()
const walk = (n) => {
  if (Array.isArray(n)) return n.forEach(walk)
  if (n && typeof n === 'object') {
    for (const [k, v] of Object.entries(n)) {
      if (k === '$ref' && typeof v === 'string') {
        if (!v.startsWith('#/')) foreign.add(v)
        else if (!/^#\/components\/[A-Za-z]+\/[^/]+$/.test(v)) deep.add(v)
      } else walk(v)
    }
  }
}
walk(doc)
const ex = (set) => [...set].slice(0, 2).map((v) => (v.length > 110 ? `${v.slice(0, 110)}…` : v)).join('  |  ')
if (deep.size) say('WARN', `${deep.size} $ref(s) point deeper than #/components/<kind>/<name>, e.g. ${ex(deep)}`)
if (foreign.size) say('WARN', `${foreign.size} $ref(s) are still file-relative after bundling, e.g. ${ex(foreign)}`)

// 5. Optional: compare with the generated output.
if (appDir) {
  const routes = path.join(path.resolve(appDir), 'src/routes.ts')
  if (fs.existsSync(routes)) {
    const generated = (fs.readFileSync(routes, 'utf8').match(/\bcreateRoute\(/g) ?? []).length
    say('routes', `createRoute x${generated} / operations ${operations}${generated === operations ? '  OK' : '  MISMATCH (operations dropped or duplicated?)'}`)
  }
}
say('verdict', 'usable')
