import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/codat.io/sync-for-expenses/prealpha/openapi.yaml',
  output: './src/codat-io-sync-for-expenses/routes.ts',
  template: {},
  type: { output: './src/codat-io-sync-for-expenses/types.ts' },
  client: { output: './src/codat-io-sync-for-expenses/client.ts', baseUrl: '/' },
  rpc: { output: './src/codat-io-sync-for-expenses/rpc.ts', parseResponse: true },
  swr: { output: './src/codat-io-sync-for-expenses/hooks/swr.ts' },
  'tanstack-query': { output: './src/codat-io-sync-for-expenses/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/codat-io-sync-for-expenses/hooks/preact-query.ts' },
  'solid-query': { output: './src/codat-io-sync-for-expenses/hooks/solid-query.ts' },
  'vue-query': { output: './src/codat-io-sync-for-expenses/hooks/vue-query.ts' },
  'svelte-query': { output: './src/codat-io-sync-for-expenses/hooks/svelte-query.ts' },
  'angular-query': { output: './src/codat-io-sync-for-expenses/hooks/angular-query.ts' },
  docs: {
    output: './src/codat-io-sync-for-expenses/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
