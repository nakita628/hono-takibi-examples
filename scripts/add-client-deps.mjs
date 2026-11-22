#!/usr/bin/env node
// Add the packages the generated hooks import to apps' package.json, from the root catalog,
// so that `tsc --noEmit` can check every output.
//
//   node scripts/add-client-deps.mjs apps/<name>/package.json...
import fs from 'node:fs'

const DEPENDENCIES = [
  '@angular/common',
  '@angular/core',
  '@tanstack/angular-query-experimental',
  '@tanstack/preact-query',
  '@tanstack/react-query',
  '@tanstack/solid-query',
  '@tanstack/svelte-query',
  '@tanstack/vue-query',
  'preact',
  'react',
  'rxjs',
  'solid-js',
  'svelte',
  'swr',
  'vue',
]
const DEV_DEPENDENCIES = ['@types/react']

const sorted = (object) => Object.fromEntries(Object.entries(object).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0)))

for (const file of process.argv.slice(2)) {
  const pkg = JSON.parse(fs.readFileSync(file, 'utf8'))
  const before = JSON.stringify(pkg)
  pkg.dependencies = sorted({ ...pkg.dependencies, ...Object.fromEntries(DEPENDENCIES.map((d) => [d, 'catalog:'])) })
  pkg.devDependencies = sorted({ ...pkg.devDependencies, ...Object.fromEntries(DEV_DEPENDENCIES.map((d) => [d, 'catalog:'])) })
  if (JSON.stringify(pkg) !== before) {
    fs.writeFileSync(file, `${JSON.stringify(pkg, null, 2)}\n`)
    console.log(`updated  ${file}`)
  }
}
