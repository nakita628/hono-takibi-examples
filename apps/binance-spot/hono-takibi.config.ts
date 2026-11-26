import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Binance Public Spot API, official OpenAPI spec:
  // https://github.com/binance/binance-api-swagger/blob/64b327c0addadd191ca0dca8e6b4cebd8a97c05c/spot_api.yaml
  input: 'https://raw.githubusercontent.com/binance/binance-api-swagger/master/spot_api.yaml',
  output: './src/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/types.ts' },
  client: { output: './src/client.ts', baseUrl: '/' },
  rpc: { output: './src/rpc.ts', parseResponse: true },
  swr: { output: './src/hooks/swr.ts' },
  'tanstack-query': { output: './src/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hooks/preact-query.ts' },
  'solid-query': { output: './src/hooks/solid-query.ts' },
  'vue-query': { output: './src/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hooks/angular-query.ts' },
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.binance.com',
  },
})
