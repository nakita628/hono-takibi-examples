import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/sell-metadata/v1.6.0/openapi.yaml',
  output: './src/sell-metadata/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/sell-metadata/types.ts' },
  client: { output: './src/sell-metadata/client.ts', baseUrl: '/' },
  rpc: { output: './src/sell-metadata/rpc.ts', parseResponse: true },
  swr: { output: './src/sell-metadata/hooks/swr.ts' },
  'tanstack-query': { output: './src/sell-metadata/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sell-metadata/hooks/preact-query.ts' },
  'solid-query': { output: './src/sell-metadata/hooks/solid-query.ts' },
  'vue-query': { output: './src/sell-metadata/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sell-metadata/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sell-metadata/hooks/angular-query.ts' },
  docs: {
    output: './src/sell-metadata/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
