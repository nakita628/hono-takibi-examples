import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/shop.app/v1/openapi.yaml',
  output: './src/shop-app/routes.ts',
  template: {},
  type: { output: './src/shop-app/types.ts' },
  client: { output: './src/shop-app/client.ts', baseUrl: '/' },
  rpc: { output: './src/shop-app/rpc.ts', parseResponse: true },
  swr: { output: './src/shop-app/hooks/swr.ts' },
  'tanstack-query': { output: './src/shop-app/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/shop-app/hooks/preact-query.ts' },
  'solid-query': { output: './src/shop-app/hooks/solid-query.ts' },
  'vue-query': { output: './src/shop-app/hooks/vue-query.ts' },
  'svelte-query': { output: './src/shop-app/hooks/svelte-query.ts' },
  'angular-query': { output: './src/shop-app/hooks/angular-query.ts' },
  docs: {
    output: './src/shop-app/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
