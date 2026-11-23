import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/firmalyzer.com/iotvas/1.0/openapi.yaml',
  output: './src/firmalyzer-iotvas/routes.ts',
  template: {},
  type: { output: './src/firmalyzer-iotvas/types.ts' },
  client: { output: './src/firmalyzer-iotvas/client.ts', baseUrl: '/' },
  rpc: { output: './src/firmalyzer-iotvas/rpc.ts', parseResponse: true },
  swr: { output: './src/firmalyzer-iotvas/hooks/swr.ts' },
  'tanstack-query': { output: './src/firmalyzer-iotvas/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/firmalyzer-iotvas/hooks/preact-query.ts' },
  'solid-query': { output: './src/firmalyzer-iotvas/hooks/solid-query.ts' },
  'vue-query': { output: './src/firmalyzer-iotvas/hooks/vue-query.ts' },
  'svelte-query': { output: './src/firmalyzer-iotvas/hooks/svelte-query.ts' },
  'angular-query': { output: './src/firmalyzer-iotvas/hooks/angular-query.ts' },
  docs: {
    output: './src/firmalyzer-iotvas/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
