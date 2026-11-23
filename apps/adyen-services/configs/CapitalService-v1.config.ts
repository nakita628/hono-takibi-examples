import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/CapitalService-v1.json',
  output: './src/CapitalService-v1/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/CapitalService-v1/types.ts' },
  client: { output: './src/CapitalService-v1/client.ts', baseUrl: '/' },
  rpc: { output: './src/CapitalService-v1/rpc.ts', parseResponse: true },
  swr: { output: './src/CapitalService-v1/hooks/swr.ts' },
  'tanstack-query': { output: './src/CapitalService-v1/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/CapitalService-v1/hooks/preact-query.ts' },
  'solid-query': { output: './src/CapitalService-v1/hooks/solid-query.ts' },
  'vue-query': { output: './src/CapitalService-v1/hooks/vue-query.ts' },
  'svelte-query': { output: './src/CapitalService-v1/hooks/svelte-query.ts' },
  'angular-query': { output: './src/CapitalService-v1/hooks/angular-query.ts' },
  docs: {
    output: './src/CapitalService-v1/api.md',
    curl: true,
    baseUrl: 'https://balanceplatform-api-test.adyen.com/capital/v1',
  },
})
