import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/iotevents/2018-07-27/openapi.yaml',
  output: './src/iotevents/routes.ts',
  template: {},
  type: { output: './src/iotevents/types.ts' },
  client: { output: './src/iotevents/client.ts', baseUrl: '/' },
  rpc: { output: './src/iotevents/rpc.ts', parseResponse: true },
  swr: { output: './src/iotevents/hooks/swr.ts' },
  'tanstack-query': { output: './src/iotevents/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/iotevents/hooks/preact-query.ts' },
  'solid-query': { output: './src/iotevents/hooks/solid-query.ts' },
  'vue-query': { output: './src/iotevents/hooks/vue-query.ts' },
  'svelte-query': { output: './src/iotevents/hooks/svelte-query.ts' },
  'angular-query': { output: './src/iotevents/hooks/angular-query.ts' },
  docs: {
    output: './src/iotevents/api.md',
    curl: true,
    baseUrl: 'https://iotevents.us-east-1.amazonaws.com',
  },
})
