import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/iotdeviceadvisor/2020-09-18/openapi.yaml',
  output: './src/iotdeviceadvisor/routes.ts',
  template: {},
  type: { output: './src/iotdeviceadvisor/types.ts' },
  client: { output: './src/iotdeviceadvisor/client.ts', baseUrl: '/' },
  rpc: { output: './src/iotdeviceadvisor/rpc.ts', parseResponse: true },
  swr: { output: './src/iotdeviceadvisor/hooks/swr.ts' },
  'tanstack-query': { output: './src/iotdeviceadvisor/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/iotdeviceadvisor/hooks/preact-query.ts' },
  'solid-query': { output: './src/iotdeviceadvisor/hooks/solid-query.ts' },
  'vue-query': { output: './src/iotdeviceadvisor/hooks/vue-query.ts' },
  'svelte-query': { output: './src/iotdeviceadvisor/hooks/svelte-query.ts' },
  'angular-query': { output: './src/iotdeviceadvisor/hooks/angular-query.ts' },
  docs: {
    output: './src/iotdeviceadvisor/api.md',
    curl: true,
    baseUrl: 'https://iotdeviceadvisor.us-east-1.amazonaws.com',
  },
})
