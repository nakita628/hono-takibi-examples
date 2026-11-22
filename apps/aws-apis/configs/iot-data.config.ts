import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/iot-data/2015-05-28/openapi.yaml',
  output: './src/iot-data/routes.ts',
  template: {},
  type: { output: './src/iot-data/types.ts' },
  client: { output: './src/iot-data/client.ts', baseUrl: '/' },
  rpc: { output: './src/iot-data/rpc.ts', parseResponse: true },
  swr: { output: './src/iot-data/hooks/swr.ts' },
  'tanstack-query': { output: './src/iot-data/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/iot-data/hooks/preact-query.ts' },
  'solid-query': { output: './src/iot-data/hooks/solid-query.ts' },
  'vue-query': { output: './src/iot-data/hooks/vue-query.ts' },
  'svelte-query': { output: './src/iot-data/hooks/svelte-query.ts' },
  'angular-query': { output: './src/iot-data/hooks/angular-query.ts' },
  docs: {
    output: './src/iot-data/api.md',
    curl: true,
    baseUrl: 'https://iot-data.us-east-1.amazonaws.com',
  },
})
