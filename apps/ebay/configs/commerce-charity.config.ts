import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/commerce-charity/v1.2.1/openapi.yaml',
  output: './src/commerce-charity/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/commerce-charity/types.ts' },
  client: { output: './src/commerce-charity/client.ts', baseUrl: '/' },
  rpc: { output: './src/commerce-charity/rpc.ts', parseResponse: true },
  swr: { output: './src/commerce-charity/hooks/swr.ts' },
  'tanstack-query': { output: './src/commerce-charity/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/commerce-charity/hooks/preact-query.ts' },
  'solid-query': { output: './src/commerce-charity/hooks/solid-query.ts' },
  'vue-query': { output: './src/commerce-charity/hooks/vue-query.ts' },
  'svelte-query': { output: './src/commerce-charity/hooks/svelte-query.ts' },
  'angular-query': { output: './src/commerce-charity/hooks/angular-query.ts' },
  docs: {
    output: './src/commerce-charity/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
