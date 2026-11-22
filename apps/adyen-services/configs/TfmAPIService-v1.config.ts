import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/TfmAPIService-v1.json',
  output: './src/TfmAPIService-v1/routes.ts',
  template: {},
  type: { output: './src/TfmAPIService-v1/types.ts' },
  client: { output: './src/TfmAPIService-v1/client.ts', baseUrl: '/' },
  rpc: { output: './src/TfmAPIService-v1/rpc.ts', parseResponse: true },
  swr: { output: './src/TfmAPIService-v1/hooks/swr.ts' },
  'tanstack-query': { output: './src/TfmAPIService-v1/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/TfmAPIService-v1/hooks/preact-query.ts' },
  'solid-query': { output: './src/TfmAPIService-v1/hooks/solid-query.ts' },
  'vue-query': { output: './src/TfmAPIService-v1/hooks/vue-query.ts' },
  'svelte-query': { output: './src/TfmAPIService-v1/hooks/svelte-query.ts' },
  'angular-query': { output: './src/TfmAPIService-v1/hooks/angular-query.ts' },
  docs: {
    output: './src/TfmAPIService-v1/api.md',
    curl: true,
    baseUrl: 'https://postfmapi-test.adyen.com/postfmapi/terminal/v1',
  },
})
