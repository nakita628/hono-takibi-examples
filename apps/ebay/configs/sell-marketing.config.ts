import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/sell-marketing/v1.15.0/openapi.yaml',
  output: './src/sell-marketing/routes.ts',
  template: {},
  type: { output: './src/sell-marketing/types.ts' },
  client: { output: './src/sell-marketing/client.ts', baseUrl: '/' },
  rpc: { output: './src/sell-marketing/rpc.ts', parseResponse: true },
  swr: { output: './src/sell-marketing/hooks/swr.ts' },
  'tanstack-query': { output: './src/sell-marketing/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sell-marketing/hooks/preact-query.ts' },
  'solid-query': { output: './src/sell-marketing/hooks/solid-query.ts' },
  'vue-query': { output: './src/sell-marketing/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sell-marketing/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sell-marketing/hooks/angular-query.ts' },
  docs: {
    output: './src/sell-marketing/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
