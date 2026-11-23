import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Giftcard-API/1.0/openapi.yaml',
  output: './src/giftcard-api/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/giftcard-api/types.ts' },
  client: { output: './src/giftcard-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/giftcard-api/rpc.ts', parseResponse: true },
  swr: { output: './src/giftcard-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/giftcard-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/giftcard-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/giftcard-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/giftcard-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/giftcard-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/giftcard-api/hooks/angular-query.ts' },
  docs: {
    output: './src/giftcard-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
