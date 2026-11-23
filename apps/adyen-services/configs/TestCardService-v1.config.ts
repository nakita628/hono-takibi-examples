import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/TestCardService-v1.json',
  output: './src/TestCardService-v1/routes.ts',
  template: {},
  type: { output: './src/TestCardService-v1/types.ts' },
  client: { output: './src/TestCardService-v1/client.ts', baseUrl: '/' },
  rpc: { output: './src/TestCardService-v1/rpc.ts', parseResponse: true },
  swr: { output: './src/TestCardService-v1/hooks/swr.ts' },
  'tanstack-query': { output: './src/TestCardService-v1/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/TestCardService-v1/hooks/preact-query.ts' },
  'solid-query': { output: './src/TestCardService-v1/hooks/solid-query.ts' },
  'vue-query': { output: './src/TestCardService-v1/hooks/vue-query.ts' },
  'svelte-query': { output: './src/TestCardService-v1/hooks/svelte-query.ts' },
  'angular-query': { output: './src/TestCardService-v1/hooks/angular-query.ts' },
  docs: {
    output: './src/TestCardService-v1/api.md',
    curl: true,
    baseUrl: 'https://pal-test.adyen.com/pal/services/TestCard/v1',
  },
})
