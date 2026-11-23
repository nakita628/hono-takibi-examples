import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/A2APaymentsService-v1.json',
  output: './src/A2APaymentsService-v1/routes.ts',
  template: {},
  type: { output: './src/A2APaymentsService-v1/types.ts' },
  client: { output: './src/A2APaymentsService-v1/client.ts', baseUrl: '/' },
  rpc: { output: './src/A2APaymentsService-v1/rpc.ts', parseResponse: true },
  swr: { output: './src/A2APaymentsService-v1/hooks/swr.ts' },
  'tanstack-query': { output: './src/A2APaymentsService-v1/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/A2APaymentsService-v1/hooks/preact-query.ts' },
  'solid-query': { output: './src/A2APaymentsService-v1/hooks/solid-query.ts' },
  'vue-query': { output: './src/A2APaymentsService-v1/hooks/vue-query.ts' },
  'svelte-query': { output: './src/A2APaymentsService-v1/hooks/svelte-query.ts' },
  'angular-query': { output: './src/A2APaymentsService-v1/hooks/angular-query.ts' },
  docs: {
    output: './src/A2APaymentsService-v1/api.md',
    curl: true,
    baseUrl: 'https://balanceplatform-api-test.adyen.com/a2aissuer-api/v1',
  },
})
