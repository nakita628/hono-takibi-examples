import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/GiftCard-Hub-API/1.0/openapi.yaml',
  output: './src/giftcard-hub-api/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/giftcard-hub-api/types.ts' },
  client: { output: './src/giftcard-hub-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/giftcard-hub-api/rpc.ts', parseResponse: true },
  swr: { output: './src/giftcard-hub-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/giftcard-hub-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/giftcard-hub-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/giftcard-hub-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/giftcard-hub-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/giftcard-hub-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/giftcard-hub-api/hooks/angular-query.ts' },
  docs: {
    output: './src/giftcard-hub-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
