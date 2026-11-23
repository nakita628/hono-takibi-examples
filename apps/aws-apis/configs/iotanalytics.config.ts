import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/iotanalytics/2017-11-27/openapi.yaml',
  output: './src/iotanalytics/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/iotanalytics/types.ts' },
  client: { output: './src/iotanalytics/client.ts', baseUrl: '/' },
  rpc: { output: './src/iotanalytics/rpc.ts', parseResponse: true },
  swr: { output: './src/iotanalytics/hooks/swr.ts' },
  'tanstack-query': { output: './src/iotanalytics/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/iotanalytics/hooks/preact-query.ts' },
  'solid-query': { output: './src/iotanalytics/hooks/solid-query.ts' },
  'vue-query': { output: './src/iotanalytics/hooks/vue-query.ts' },
  'svelte-query': { output: './src/iotanalytics/hooks/svelte-query.ts' },
  'angular-query': { output: './src/iotanalytics/hooks/angular-query.ts' },
  docs: {
    output: './src/iotanalytics/api.md',
    curl: true,
    baseUrl: 'https://iotanalytics.us-east-1.amazonaws.com',
  },
})
