import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Generated from a downloaded copy of the document, with only `input` changed: when swagger-parser 13.1.0 reads
  // it from a URL it throws `Cannot convert undefined or null to object` (lib/util.js, fixOasRelativeServers) on the
  // `x-an-extension-null: null` entry under `paths` (nakita628/hono-takibi#654). The same file generates from disk, so
  // `scripts/regen.sh` (which reads the URL) fails on it and keeps this output. hono-takibi 0.35.12 reads the `x-*`
  // entries correctly (nakita628/hono-takibi#416).
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/extensionsEverywhere.yaml',
  output: './src/3-0-extensionseverywhere/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-0-extensionseverywhere/types.ts' },
  client: { output: './src/3-0-extensionseverywhere/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-extensionseverywhere/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-extensionseverywhere/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-extensionseverywhere/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-extensionseverywhere/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-extensionseverywhere/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-extensionseverywhere/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-extensionseverywhere/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-extensionseverywhere/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-extensionseverywhere/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
