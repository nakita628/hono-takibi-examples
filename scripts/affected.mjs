#!/usr/bin/env node
// Documents linked to hono-takibi issues: the ones to regenerate when those issues are fixed.
//
//   node scripts/affected.mjs <issue> [<issue> ...] [--older-than <version>]
//   gh api -X GET search/issues -f q='repo:nakita628/hono-takibi is:issue is:closed' --paginate \
//     --jq '.items[].number' | node scripts/affected.mjs --older-than <version>
//
// A document is linked to an issue when the issue is mentioned (`hono-takibi#N` or `hono-takibi/issues/N`)
// in its typecheck cause in apps/<app>/generated.json, in its config (the comment about a left-out output),
// or in its README row (a document that is not generated, or only partly). With --older-than, only documents
// last generated with an older hono-takibi, or never generated, are listed.
// Prints `<app>\t<config>\t#N,#M`.
import fs from 'node:fs'
import path from 'node:path'
import { configsOf, loadManifest, readConfig } from './sources.mjs'

const root = path.resolve(import.meta.dirname, '..')
const args = process.argv.slice(2)
const olderIdx = args.indexOf('--older-than')
const olderThan = olderIdx >= 0 ? args.splice(olderIdx, 2)[1] : undefined
let wanted = args.filter((a) => /^#?\d+$/.test(a)).map((a) => Number(a.replace('#', '')))
if (!wanted.length && !process.stdin.isTTY) {
  wanted = (fs.readFileSync(0, 'utf8').match(/\d+/g) ?? []).map(Number)
}
if (!wanted.length) {
  console.error('usage: node scripts/affected.mjs <issue> [<issue> ...] [--older-than <version>]  (or issue numbers on stdin)')
  process.exit(2)
}
const wantedSet = new Set(wanted)

const mentions = (text) => [...(text ?? '').matchAll(/hono-takibi(?:\/issues\/|#)(\d+)/g)].map((m) => Number(m[1]))
const older = (a, b) => {
  const pa = a.split('.').map(Number)
  const pb = b.split('.').map(Number)
  for (let i = 0; i < 3; i++) if ((pa[i] ?? 0) !== (pb[i] ?? 0)) return (pa[i] ?? 0) < (pb[i] ?? 0)
  return false
}

// README rows: | [app](./apps/app) · name | input | output |
const readmeIssues = new Map()
for (const line of fs.readFileSync(path.join(root, 'README.md'), 'utf8').split('\n')) {
  const m = line.match(/^\| \[([^\]]+)\]\(\.\/apps\/[^)]+\)(?: · ([^|]+?))? \| [^|]+ \| (.*) \|$/)
  if (!m) continue
  const found = mentions(m[3])
  if (found.length) readmeIssues.set(`${m[1]}\t${(m[2] ?? '').trim()}`, found)
}

const appsDir = path.join(root, 'apps')
for (const app of fs.readdirSync(appsDir).sort()) {
  const configs = configsOf(app)
  if (!configs.length) continue
  const manifest = loadManifest(app)
  for (const config of configs) {
    const entry = manifest[config]
    const { text, output } = readConfig(app, config)
    const name = path.posix.dirname(output ?? './src/routes.ts').replace(/^\.\/src/, '').replace(/^\/+|\/+$/g, '')
    const linked = new Set([
      ...mentions(entry?.typecheck?.issue),
      ...mentions(text),
      ...(readmeIssues.get(`${app}\t${name}`) ?? []),
    ])
    const hit = [...linked].filter((n) => wantedSet.has(n)).sort((a, b) => a - b)
    if (!hit.length) continue
    if (olderThan && entry?.generated) {
      // A document is due when its outputs, or its last failed attempt, come from an older hono-takibi.
      const lastTried = entry.failed?.['hono-takibi'] ?? entry['hono-takibi']
      if (!older(lastTried, olderThan)) continue
    }
    console.log(`${app}\t${config}\t${hit.map((n) => `#${n}`).join(',')}`)
  }
}
