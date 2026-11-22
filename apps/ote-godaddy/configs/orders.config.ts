import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ote-godaddy.com/orders/1.0.0/openapi.yaml',
  output: './src/orders/routes.ts',
  template: {},
  type: { output: './src/orders/types.ts' },
  client: { output: './src/orders/client.ts', baseUrl: '/' },
  rpc: { output: './src/orders/rpc.ts', parseResponse: true },
  swr: { output: './src/orders/hooks/swr.ts' },
  'tanstack-query': { output: './src/orders/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/orders/hooks/preact-query.ts' },
  'solid-query': { output: './src/orders/hooks/solid-query.ts' },
  'vue-query': { output: './src/orders/hooks/vue-query.ts' },
  'svelte-query': { output: './src/orders/hooks/svelte-query.ts' },
  'angular-query': { output: './src/orders/hooks/angular-query.ts' },
  docs: {
    output: './src/orders/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
