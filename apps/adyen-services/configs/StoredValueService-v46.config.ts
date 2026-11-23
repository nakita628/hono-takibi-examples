import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/StoredValueService-v46.json',
  output: './src/StoredValueService-v46/routes.ts',
  template: {},
  type: { output: './src/StoredValueService-v46/types.ts' },
  client: { output: './src/StoredValueService-v46/client.ts', baseUrl: '/' },
  rpc: { output: './src/StoredValueService-v46/rpc.ts', parseResponse: true },
  swr: { output: './src/StoredValueService-v46/hooks/swr.ts' },
  'tanstack-query': { output: './src/StoredValueService-v46/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/StoredValueService-v46/hooks/preact-query.ts' },
  'solid-query': { output: './src/StoredValueService-v46/hooks/solid-query.ts' },
  'vue-query': { output: './src/StoredValueService-v46/hooks/vue-query.ts' },
  'svelte-query': { output: './src/StoredValueService-v46/hooks/svelte-query.ts' },
  'angular-query': { output: './src/StoredValueService-v46/hooks/angular-query.ts' },
  docs: {
    output: './src/StoredValueService-v46/api.md',
    curl: true,
    baseUrl: 'https://pal-test.adyen.com/pal/servlet/StoredValue/v46',
  },
})
