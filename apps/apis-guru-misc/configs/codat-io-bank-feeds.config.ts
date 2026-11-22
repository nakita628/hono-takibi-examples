import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/codat.io/bank-feeds/2.1.0/openapi.yaml',
  output: './src/codat-io-bank-feeds/routes.ts',
  template: {},
  type: { output: './src/codat-io-bank-feeds/types.ts' },
  client: { output: './src/codat-io-bank-feeds/client.ts', baseUrl: '/' },
  rpc: { output: './src/codat-io-bank-feeds/rpc.ts', parseResponse: true },
  swr: { output: './src/codat-io-bank-feeds/hooks/swr.ts' },
  'tanstack-query': { output: './src/codat-io-bank-feeds/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/codat-io-bank-feeds/hooks/preact-query.ts' },
  'solid-query': { output: './src/codat-io-bank-feeds/hooks/solid-query.ts' },
  'vue-query': { output: './src/codat-io-bank-feeds/hooks/vue-query.ts' },
  'svelte-query': { output: './src/codat-io-bank-feeds/hooks/svelte-query.ts' },
  'angular-query': { output: './src/codat-io-bank-feeds/hooks/angular-query.ts' },
  docs: {
    output: './src/codat-io-bank-feeds/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
