import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/sell-feed/v1.3.1/openapi.yaml',
  output: './src/sell-feed/routes.ts',
  template: {},
  type: { output: './src/sell-feed/types.ts' },
  client: { output: './src/sell-feed/client.ts', baseUrl: '/' },
  rpc: { output: './src/sell-feed/rpc.ts', parseResponse: true },
  swr: { output: './src/sell-feed/hooks/swr.ts' },
  'tanstack-query': { output: './src/sell-feed/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sell-feed/hooks/preact-query.ts' },
  'solid-query': { output: './src/sell-feed/hooks/solid-query.ts' },
  'vue-query': { output: './src/sell-feed/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sell-feed/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sell-feed/hooks/angular-query.ts' },
  docs: {
    output: './src/sell-feed/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
