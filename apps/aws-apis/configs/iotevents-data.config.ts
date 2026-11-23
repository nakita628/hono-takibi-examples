import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/iotevents-data/2018-10-23/openapi.yaml',
  output: './src/iotevents-data/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/iotevents-data/types.ts' },
  client: { output: './src/iotevents-data/client.ts', baseUrl: '/' },
  rpc: { output: './src/iotevents-data/rpc.ts', parseResponse: true },
  swr: { output: './src/iotevents-data/hooks/swr.ts' },
  'tanstack-query': { output: './src/iotevents-data/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/iotevents-data/hooks/preact-query.ts' },
  'solid-query': { output: './src/iotevents-data/hooks/solid-query.ts' },
  'vue-query': { output: './src/iotevents-data/hooks/vue-query.ts' },
  'svelte-query': { output: './src/iotevents-data/hooks/svelte-query.ts' },
  'angular-query': { output: './src/iotevents-data/hooks/angular-query.ts' },
  docs: {
    output: './src/iotevents-data/api.md',
    curl: true,
    baseUrl: 'https://iotevents-data.us-east-1.amazonaws.com',
  },
})
