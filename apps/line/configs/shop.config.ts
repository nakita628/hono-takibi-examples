import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/line/line-openapi/main/shop.yml',
  output: './src/shop/routes.ts',
  template: {},
  type: { output: './src/shop/types.ts' },
  client: { output: './src/shop/client.ts', baseUrl: '/' },
  rpc: { output: './src/shop/rpc.ts', parseResponse: true },
  swr: { output: './src/shop/hooks/swr.ts' },
  'tanstack-query': { output: './src/shop/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/shop/hooks/preact-query.ts' },
  'solid-query': { output: './src/shop/hooks/solid-query.ts' },
  'vue-query': { output: './src/shop/hooks/vue-query.ts' },
  'svelte-query': { output: './src/shop/hooks/svelte-query.ts' },
  'angular-query': { output: './src/shop/hooks/angular-query.ts' },
  docs: {
    output: './src/shop/api.md',
    curl: true,
    baseUrl: 'https://api.line.me',
  },
})
