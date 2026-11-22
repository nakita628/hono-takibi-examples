#!/usr/bin/env node
// Fill the empty handler stubs that `template` writes, so that the app typechecks.
// An empty body does not satisfy @hono/zod-openapi's typed handlers (nakita628/hono-takibi#497);
// a body that throws does, because its return type is `never`.
//
//   node scripts/fill-handler-stubs.mjs <dir>...
//
// Every `handlers/*.ts` under the given directories is rewritten. hono-takibi keeps handler bodies
// when it regenerates, so run this once after the first generation and regenerate to format.
import fs from 'node:fs'
import path from 'node:path'

const walk = (dir) =>
  fs.existsSync(dir)
    ? fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const full = path.join(dir, entry.name)
        return entry.isDirectory() ? (entry.name === 'node_modules' ? [] : walk(full)) : [full]
      })
    : []

let files = 0
let stubs = 0
for (const root of process.argv.slice(2)) {
  for (const file of walk(root)) {
    if (!file.endsWith('.ts') || path.basename(path.dirname(file)) !== 'handlers') continue
    const source = fs.readFileSync(file, 'utf8')
    let count = 0
    // `(c) => {}` in `app.openapi(route, (c) => {})`, and `async (c) => {}` with `template.routeHandler`.
    const filled = source.replace(/(async )?\(c\) => \{\}/g, (_, isAsync) => {
      count++
      return `${isAsync ?? ''}(c) => {\n  throw new Error('Not implemented')\n}`
    })
    if (count > 0) {
      fs.writeFileSync(file, filled)
      files++
      stubs += count
    }
  }
}
console.log(`filled ${stubs} stub(s) in ${files} file(s)`)
