import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/plaid.com/2020-09-14_1.334.0/openapi.yaml',
  output: './src/plaid/routes.ts',
  template: {},
  type: { output: './src/plaid/types.ts' },
  client: { output: './src/plaid/client.ts', baseUrl: '/' },
  rpc: { output: './src/plaid/rpc.ts', parseResponse: true },
  swr: { output: './src/plaid/hooks/swr.ts' },
  'tanstack-query': { output: './src/plaid/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/plaid/hooks/preact-query.ts' },
  'solid-query': { output: './src/plaid/hooks/solid-query.ts' },
  'vue-query': { output: './src/plaid/hooks/vue-query.ts' },
  'svelte-query': { output: './src/plaid/hooks/svelte-query.ts' },
  'angular-query': { output: './src/plaid/hooks/angular-query.ts' },
  docs: {
    output: './src/plaid/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
