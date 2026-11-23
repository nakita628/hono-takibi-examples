import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/ManagementService-v3.json',
  output: './src/ManagementService-v3/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/ManagementService-v3/types.ts' },
  client: { output: './src/ManagementService-v3/client.ts', baseUrl: '/' },
  rpc: { output: './src/ManagementService-v3/rpc.ts', parseResponse: true },
  swr: { output: './src/ManagementService-v3/hooks/swr.ts' },
  'tanstack-query': { output: './src/ManagementService-v3/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ManagementService-v3/hooks/preact-query.ts' },
  'solid-query': { output: './src/ManagementService-v3/hooks/solid-query.ts' },
  'vue-query': { output: './src/ManagementService-v3/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ManagementService-v3/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ManagementService-v3/hooks/angular-query.ts' },
  docs: {
    output: './src/ManagementService-v3/api.md',
    curl: true,
    baseUrl: 'https://management-test.adyen.com/v3',
  },
})
