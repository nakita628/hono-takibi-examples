import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/walletobjects.googleapis.com/pay-passes/v1/openapi.yaml',
  output: './src/walletobjects-googleapis-pay-passes/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/walletobjects-googleapis-pay-passes/types.ts' },
  client: { output: './src/walletobjects-googleapis-pay-passes/client.ts', baseUrl: '/' },
  rpc: { output: './src/walletobjects-googleapis-pay-passes/rpc.ts', parseResponse: true },
  swr: { output: './src/walletobjects-googleapis-pay-passes/hooks/swr.ts' },
  'tanstack-query': { output: './src/walletobjects-googleapis-pay-passes/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/walletobjects-googleapis-pay-passes/hooks/preact-query.ts' },
  'solid-query': { output: './src/walletobjects-googleapis-pay-passes/hooks/solid-query.ts' },
  'vue-query': { output: './src/walletobjects-googleapis-pay-passes/hooks/vue-query.ts' },
  'svelte-query': { output: './src/walletobjects-googleapis-pay-passes/hooks/svelte-query.ts' },
  'angular-query': { output: './src/walletobjects-googleapis-pay-passes/hooks/angular-query.ts' },
  docs: {
    output: './src/walletobjects-googleapis-pay-passes/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
