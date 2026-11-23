import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/paymentsresellersubscription/v1/openapi.yaml',
  output: './src/paymentsresellersubscription/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/paymentsresellersubscription/types.ts' },
  client: { output: './src/paymentsresellersubscription/client.ts', baseUrl: '/' },
  rpc: { output: './src/paymentsresellersubscription/rpc.ts', parseResponse: true },
  swr: { output: './src/paymentsresellersubscription/hooks/swr.ts' },
  'tanstack-query': { output: './src/paymentsresellersubscription/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/paymentsresellersubscription/hooks/preact-query.ts' },
  'solid-query': { output: './src/paymentsresellersubscription/hooks/solid-query.ts' },
  'vue-query': { output: './src/paymentsresellersubscription/hooks/vue-query.ts' },
  'svelte-query': { output: './src/paymentsresellersubscription/hooks/svelte-query.ts' },
  'angular-query': { output: './src/paymentsresellersubscription/hooks/angular-query.ts' },
  docs: {
    output: './src/paymentsresellersubscription/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
