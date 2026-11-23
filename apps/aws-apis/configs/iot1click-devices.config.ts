import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/iot1click-devices/2018-05-14/openapi.yaml',
  output: './src/iot1click-devices/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/iot1click-devices/types.ts' },
  client: { output: './src/iot1click-devices/client.ts', baseUrl: '/' },
  rpc: { output: './src/iot1click-devices/rpc.ts', parseResponse: true },
  swr: { output: './src/iot1click-devices/hooks/swr.ts' },
  'tanstack-query': { output: './src/iot1click-devices/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/iot1click-devices/hooks/preact-query.ts' },
  'solid-query': { output: './src/iot1click-devices/hooks/solid-query.ts' },
  'vue-query': { output: './src/iot1click-devices/hooks/vue-query.ts' },
  'svelte-query': { output: './src/iot1click-devices/hooks/svelte-query.ts' },
  'angular-query': { output: './src/iot1click-devices/hooks/angular-query.ts' },
  docs: {
    output: './src/iot1click-devices/api.md',
    curl: true,
    baseUrl: 'https://iot1click-devices.us-east-1.amazonaws.com',
  },
})
