import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/shop-pro.jp/1.0.0/openapi.yaml',
  output: './src/shop-pro-jp/routes.ts',
  template: {},
  type: { output: './src/shop-pro-jp/types.ts' },
  client: { output: './src/shop-pro-jp/client.ts', baseUrl: '/' },
  rpc: { output: './src/shop-pro-jp/rpc.ts', parseResponse: true },
  swr: { output: './src/shop-pro-jp/hooks/swr.ts' },
  'tanstack-query': { output: './src/shop-pro-jp/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/shop-pro-jp/hooks/preact-query.ts' },
  'solid-query': { output: './src/shop-pro-jp/hooks/solid-query.ts' },
  'vue-query': { output: './src/shop-pro-jp/hooks/vue-query.ts' },
  'svelte-query': { output: './src/shop-pro-jp/hooks/svelte-query.ts' },
  'angular-query': { output: './src/shop-pro-jp/hooks/angular-query.ts' },
  docs: {
    output: './src/shop-pro-jp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
