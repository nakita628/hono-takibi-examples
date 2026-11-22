#!/usr/bin/env node
// Add every client-side output to hono-takibi configs, next to the routes output:
// template, type, client, rpc (with parseResponse) and the hooks of all seven query libraries.
//
//   node scripts/add-client-outputs.mjs <config.ts>...
//
// `client` needs `template`, and `rpc` and the hooks need `client`, so all of them come together.
// A config that already has `template` is left alone. The docs output is kept as it is.
import fs from 'node:fs'

const HOOKS = ['swr', 'tanstack-query', 'preact-query', 'solid-query', 'vue-query', 'svelte-query', 'angular-query']
const key = (name) => (/^[a-z]+$/.test(name) ? name : `'${name}'`)

for (const file of process.argv.slice(2)) {
  const source = fs.readFileSync(file, 'utf8')
  if (/^\s*template:/m.test(source)) {
    console.log(`skip     ${file} (already has template)`)
    continue
  }
  const match = source.match(/^ {2}output: '(.+)\/routes\.ts',\n/m)
  if (!match) {
    console.error(`no match ${file} (no "output: '<dir>/routes.ts'" line)`)
    process.exitCode = 1
    continue
  }
  const dir = match[1]
  const block = [
    `  template: {},`,
    `  type: { output: '${dir}/types.ts' },`,
    `  client: { output: '${dir}/client.ts', baseUrl: '/' },`,
    `  rpc: { output: '${dir}/rpc.ts', parseResponse: true },`,
    ...HOOKS.map((hook) => `  ${key(hook)}: { output: '${dir}/hooks/${hook}.ts' },`),
  ].join('\n')
  fs.writeFileSync(file, source.replace(match[0], `${match[0]}${block}\n`))
  console.log(`updated  ${file}`)
}
