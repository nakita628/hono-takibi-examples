import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/developer-analytics/v1_beta.0.0/openapi.yaml',
  output: './src/developer-analytics/routes.ts',
  template: {},
  type: { output: './src/developer-analytics/types.ts' },
  client: { output: './src/developer-analytics/client.ts', baseUrl: '/' },
  rpc: { output: './src/developer-analytics/rpc.ts', parseResponse: true },
  swr: { output: './src/developer-analytics/hooks/swr.ts' },
  'tanstack-query': { output: './src/developer-analytics/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/developer-analytics/hooks/preact-query.ts' },
  'solid-query': { output: './src/developer-analytics/hooks/solid-query.ts' },
  'vue-query': { output: './src/developer-analytics/hooks/vue-query.ts' },
  'svelte-query': { output: './src/developer-analytics/hooks/svelte-query.ts' },
  'angular-query': { output: './src/developer-analytics/hooks/angular-query.ts' },
  docs: {
    output: './src/developer-analytics/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
