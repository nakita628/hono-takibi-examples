import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/commerce-catalog/v1_beta.5.0/openapi.yaml',
  output: './src/commerce-catalog/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/commerce-catalog/types.ts' },
  client: { output: './src/commerce-catalog/client.ts', baseUrl: '/' },
  rpc: { output: './src/commerce-catalog/rpc.ts', parseResponse: true },
  swr: { output: './src/commerce-catalog/hooks/swr.ts' },
  'tanstack-query': { output: './src/commerce-catalog/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/commerce-catalog/hooks/preact-query.ts' },
  'solid-query': { output: './src/commerce-catalog/hooks/solid-query.ts' },
  'vue-query': { output: './src/commerce-catalog/hooks/vue-query.ts' },
  'svelte-query': { output: './src/commerce-catalog/hooks/svelte-query.ts' },
  'angular-query': { output: './src/commerce-catalog/hooks/angular-query.ts' },
  docs: {
    output: './src/commerce-catalog/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
