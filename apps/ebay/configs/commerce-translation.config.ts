import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/commerce-translation/1/openapi.yaml',
  output: './src/commerce-translation/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/commerce-translation/types.ts' },
  client: { output: './src/commerce-translation/client.ts', baseUrl: '/' },
  rpc: { output: './src/commerce-translation/rpc.ts', parseResponse: true },
  swr: { output: './src/commerce-translation/hooks/swr.ts' },
  'tanstack-query': { output: './src/commerce-translation/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/commerce-translation/hooks/preact-query.ts' },
  'solid-query': { output: './src/commerce-translation/hooks/solid-query.ts' },
  'vue-query': { output: './src/commerce-translation/hooks/vue-query.ts' },
  'svelte-query': { output: './src/commerce-translation/hooks/svelte-query.ts' },
  'angular-query': { output: './src/commerce-translation/hooks/angular-query.ts' },
  docs: {
    output: './src/commerce-translation/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
