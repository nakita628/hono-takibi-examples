import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/iot-jobs-data/2017-09-29/openapi.yaml',
  output: './src/iot-jobs-data/routes.ts',
  template: {},
  type: { output: './src/iot-jobs-data/types.ts' },
  client: { output: './src/iot-jobs-data/client.ts', baseUrl: '/' },
  rpc: { output: './src/iot-jobs-data/rpc.ts', parseResponse: true },
  swr: { output: './src/iot-jobs-data/hooks/swr.ts' },
  'tanstack-query': { output: './src/iot-jobs-data/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/iot-jobs-data/hooks/preact-query.ts' },
  'solid-query': { output: './src/iot-jobs-data/hooks/solid-query.ts' },
  'vue-query': { output: './src/iot-jobs-data/hooks/vue-query.ts' },
  'svelte-query': { output: './src/iot-jobs-data/hooks/svelte-query.ts' },
  'angular-query': { output: './src/iot-jobs-data/hooks/angular-query.ts' },
  docs: {
    output: './src/iot-jobs-data/api.md',
    curl: true,
    baseUrl: 'https://iot-jobs-data.us-east-1.amazonaws.com',
  },
})
