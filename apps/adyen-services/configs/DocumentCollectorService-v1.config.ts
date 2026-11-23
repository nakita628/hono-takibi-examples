import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/DocumentCollectorService-v1.json',
  output: './src/DocumentCollectorService-v1/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/DocumentCollectorService-v1/types.ts' },
  client: { output: './src/DocumentCollectorService-v1/client.ts', baseUrl: '/' },
  rpc: { output: './src/DocumentCollectorService-v1/rpc.ts', parseResponse: true },
  swr: { output: './src/DocumentCollectorService-v1/hooks/swr.ts' },
  'tanstack-query': { output: './src/DocumentCollectorService-v1/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/DocumentCollectorService-v1/hooks/preact-query.ts' },
  'solid-query': { output: './src/DocumentCollectorService-v1/hooks/solid-query.ts' },
  'vue-query': { output: './src/DocumentCollectorService-v1/hooks/vue-query.ts' },
  'svelte-query': { output: './src/DocumentCollectorService-v1/hooks/svelte-query.ts' },
  'angular-query': { output: './src/DocumentCollectorService-v1/hooks/angular-query.ts' },
  docs: {
    output: './src/DocumentCollectorService-v1/api.md',
    curl: true,
    baseUrl: 'https://document-collector-test.adyen.com/v1',
  },
})
