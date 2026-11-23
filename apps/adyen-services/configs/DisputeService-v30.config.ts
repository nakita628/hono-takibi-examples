import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/DisputeService-v30.json',
  output: './src/DisputeService-v30/routes.ts',
  template: {},
  type: { output: './src/DisputeService-v30/types.ts' },
  client: { output: './src/DisputeService-v30/client.ts', baseUrl: '/' },
  rpc: { output: './src/DisputeService-v30/rpc.ts', parseResponse: true },
  swr: { output: './src/DisputeService-v30/hooks/swr.ts' },
  'tanstack-query': { output: './src/DisputeService-v30/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/DisputeService-v30/hooks/preact-query.ts' },
  'solid-query': { output: './src/DisputeService-v30/hooks/solid-query.ts' },
  'vue-query': { output: './src/DisputeService-v30/hooks/vue-query.ts' },
  'svelte-query': { output: './src/DisputeService-v30/hooks/svelte-query.ts' },
  'angular-query': { output: './src/DisputeService-v30/hooks/angular-query.ts' },
  docs: {
    output: './src/DisputeService-v30/api.md',
    curl: true,
    baseUrl: 'https://ca-test.adyen.com/ca/services/DisputeService/v30',
  },
})
