import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/revenueassam/3.0.0/openapi.yaml',
  output: './src/revenueassam/routes.ts',
  template: {},
  type: { output: './src/revenueassam/types.ts' },
  client: { output: './src/revenueassam/client.ts', baseUrl: '/' },
  rpc: { output: './src/revenueassam/rpc.ts', parseResponse: true },
  swr: { output: './src/revenueassam/hooks/swr.ts' },
  'tanstack-query': { output: './src/revenueassam/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/revenueassam/hooks/preact-query.ts' },
  'solid-query': { output: './src/revenueassam/hooks/solid-query.ts' },
  'vue-query': { output: './src/revenueassam/hooks/vue-query.ts' },
  'svelte-query': { output: './src/revenueassam/hooks/svelte-query.ts' },
  'angular-query': { output: './src/revenueassam/hooks/angular-query.ts' },
  docs: {
    output: './src/revenueassam/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
