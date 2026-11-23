#!/usr/bin/env node
// Typecheck results of every document, kept in apps/<app>/generated.json, and docs/typecheck.md written
// from them, so that a regenerated document only changes its own result.
//
//   node scripts/typecheck.mjs record <app> <config> <tsc exit code> <tsc log>   (scripts/typecheck.sh runs it)
//   node scripts/typecheck.mjs note <app> <config> "<cause>"   the Issue column of a document with errors
//   node scripts/typecheck.mjs todo                            documents with errors but no cause, and unchecked ones
//   node scripts/typecheck.mjs write                           rewrites docs/typecheck.md
//
// The cause of a document with errors is kept when it is checked again with the same error codes;
// otherwise it is dropped and `todo` lists the document.
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { configsOf, loadManifest, readConfig, saveManifest } from './sources.mjs'

const root = path.resolve(import.meta.dirname, '..')
const appsDir = path.join(root, 'apps')

/** `./src/x/routes.ts` -> `./src/x` */
const unitDir = (app, config) => path.posix.dirname(readConfig(app, config).output ?? './src/routes.ts')

/** Counts sorted like `sort | uniq -c | sort -rn`: by count, then by name, both descending. */
function top(counts, n) {
  return [...counts.entries()]
    .sort(([a, x], [b, y]) => y - x || (a < b ? 1 : a > b ? -1 : 0))
    .slice(0, n)
}

function record(app, config, exitCode, logPath) {
  const dir = unitDir(app, config).replace(/^\.\//, '')
  const lines = fs.readFileSync(logPath, 'utf8').split('\n').filter((l) => / error TS\d+/.test(l))
  const codes = new Map()
  const files = new Map()
  for (const l of lines) {
    const code = l.match(/ error (TS\d+)/)[1]
    codes.set(code, (codes.get(code) ?? 0) + 1)
    const file = l.match(/^([^(]+\.ts)\(/)?.[1]
    if (file) {
      const rel = file.startsWith(`${dir}/`) ? file.slice(dir.length + 1) : file
      files.set(rel, (files.get(rel) ?? 0) + 1)
    }
  }
  const manifest = loadManifest(app)
  const entry = manifest[config]
  if (!entry) throw new Error(`${app}/${config} has no entry in generated.json: run scripts/sources.mjs record first`)
  const previous = entry.typecheck ?? {}
  const code = Number(exitCode)
  let result
  if (lines.length > 0) {
    const where = []
    for (const [f] of top(files, 5)) {
      const name = f.startsWith('hooks/') ? 'hooks/*' : f.startsWith('handlers/') ? 'handlers/*' : f
      if (!where.includes(name)) where.push(name)
    }
    result = {
      errors: lines.length,
      where: where.map((n) => `\`${n}\``).join(', '),
      codes: top(codes, 5)
        .map(([c, k]) => `${c} ×${k}`)
        .join(', '),
    }
    const codeSet = (s) => (s ?? '').replace(/ ×\d+/g, '').split(', ').sort().join()
    if (previous.issue && codeSet(previous.codes) === codeSet(result.codes)) result.issue = previous.issue
  } else if (code === 0) {
    result = { errors: 0 }
  } else {
    const reason =
      code === 124 || code === 143
        ? 'timed out'
        : code === 137
          ? `killed for lack of memory (${Math.round(os.totalmem() / 2 ** 30)} GB)`
          : `tsc exited with ${code} without errors`
    result = { errors: null, reason }
  }
  entry.typecheck = result
  saveManifest(app, manifest)
  const summary =
    result.errors === null ? result.reason : result.errors === 0 ? 'no errors' : `${result.errors} errors (${result.codes})`
  console.log(`${app}\t${config}\t${summary}${result.errors > 0 && !result.issue ? '\tneeds a cause: scripts/typecheck.mjs note' : ''}`)
}

function note(app, config, issue) {
  const manifest = loadManifest(app)
  const t = manifest[config]?.typecheck
  if (!t || !(t.errors > 0)) throw new Error(`${app}/${config} has no typecheck errors recorded`)
  t.issue = issue
  saveManifest(app, manifest)
}

/** Every generated document: { app, config, dir, entry }. */
function units() {
  const found = []
  for (const app of fs.readdirSync(appsDir).sort()) {
    const configs = configsOf(app)
    if (!configs.length) continue
    const manifest = loadManifest(app)
    for (const config of configs) {
      const entry = manifest[config]
      if (entry?.generated) found.push({ app, config, dir: unitDir(app, config), entry })
    }
  }
  return found
}

function todo() {
  for (const u of units()) {
    const t = u.entry.typecheck
    if (!t) console.log(`${u.app}\t${u.config}\tnot checked`)
    else if (t.errors === null) console.log(`${u.app}\t${u.config}\t${t.reason}`)
    else if (t.errors > 0 && !t.issue) console.log(`${u.app}\t${u.config}\t${t.errors} errors without a cause`)
  }
}

function write() {
  const all = units()
  const name = (u) => {
    const rest = u.dir.replace(/^\.\/src/, '').replace(/^\/+|\/+$/g, '')
    return `[${u.app}](../apps/${u.app})${rest ? ` · ${rest}` : ''}`
  }
  const passing = all.filter((u) => u.entry.typecheck?.errors === 0)
  const failing = all
    .filter((u) => u.entry.typecheck?.errors > 0)
    .sort(
      (a, b) =>
        b.entry.typecheck.errors - a.entry.typecheck.errors ||
        (a.app < b.app ? -1 : a.app > b.app ? 1 : a.dir < b.dir ? -1 : a.dir > b.dir ? 1 : 0),
    )
  const unchecked = all.filter((u) => !u.entry.typecheck || u.entry.typecheck.errors === null)
  const versions = new Map()
  for (const u of all) versions.set(u.entry['hono-takibi'], (versions.get(u.entry['hono-takibi']) ?? 0) + 1)
  const byVersion = [...versions.entries()].sort(([a], [b]) => b.localeCompare(a, undefined, { numeric: true }))
  const versionText =
    byVersion.length === 1
      ? `Generated with hono-takibi ${byVersion[0][0]}.`
      : `Generated with hono-takibi ${byVersion.map(([v, n]) => `${v} (${n})`).join(', ')}; each app's \`generated.json\` has the version of each document.`

  const out = []
  out.push('# Typecheck\n')
  out.push("`tsc --noEmit` over each document's generated output: routes, types, client, rpc, the seven hooks files and the")
  out.push('template (`routeHandler: true`, with its handler stubs filled by `scripts/fill-handler-stubs.mjs`). The tsconfig is')
  out.push("the repository's (`strict`, `exactOptionalPropertyTypes`, `noUncheckedIndexedAccess`), with TypeScript 7. There is")
  out.push('no CI: `scripts/typecheck.sh` records each result in the app\'s `generated.json`, and `scripts/typecheck.mjs write`')
  out.push('writes this file from them.\n')
  out.push(
    `${versionText} ${all.length} documents: ${passing.length} with no errors, ${failing.length} with errors, ${unchecked.length} not checked.\n`,
  )
  out.push('## Errors\n')
  out.push('| App | Errors | Where | Codes | Issue |')
  out.push('| --- | --- | --- | --- | --- |')
  for (const u of failing) {
    const t = u.entry.typecheck
    out.push(`| ${name(u)} | ${t.errors} | ${t.where} | ${t.codes} | ${t.issue ?? ''} |`)
  }
  out.push('')
  if (unchecked.length) {
    out.push('## Not checked\n')
    out.push('| App | Reason |')
    out.push('| --- | --- |')
    for (const u of unchecked) out.push(`| ${name(u)} | ${u.entry.typecheck?.reason ?? 'not checked yet'} |`)
    out.push('')
  }
  out.push('## No errors\n')
  const byApp = new Map()
  for (const u of passing.sort((a, b) => (a.app < b.app ? -1 : a.app > b.app ? 1 : a.dir < b.dir ? -1 : 1))) {
    const rest = u.dir.replace(/^\.\/src/, '').replace(/^\/+|\/+$/g, '')
    if (!byApp.has(u.app)) byApp.set(u.app, [])
    if (rest) byApp.get(u.app).push(rest)
  }
  for (const [app, dirs] of byApp) out.push(`- [${app}](../apps/${app})${dirs.length ? `: ${dirs.join(', ')}` : ''}`)
  out.push('')
  fs.writeFileSync(path.join(root, 'docs/typecheck.md'), out.join('\n'))
  console.log(`docs/typecheck.md: ${passing.length} with no errors, ${failing.length} with errors, ${unchecked.length} not checked`)
}

const [command, ...rest] = process.argv.slice(2)
if (command === 'record' && rest.length === 4) record(...rest)
else if (command === 'note' && rest.length === 3) note(...rest)
else if (command === 'todo') todo()
else if (command === 'write') write()
else {
  console.error('usage: node scripts/typecheck.mjs record <app> <config> <exit code> <log> | note <app> <config> "<cause>" | todo | write')
  process.exit(2)
}
