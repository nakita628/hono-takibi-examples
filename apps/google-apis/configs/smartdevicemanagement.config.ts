import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/smartdevicemanagement/v1/openapi.yaml',
  output: './src/smartdevicemanagement/routes.ts',
  template: {},
  type: { output: './src/smartdevicemanagement/types.ts' },
  client: { output: './src/smartdevicemanagement/client.ts', baseUrl: '/' },
  rpc: { output: './src/smartdevicemanagement/rpc.ts', parseResponse: true },
  swr: { output: './src/smartdevicemanagement/hooks/swr.ts' },
  'tanstack-query': { output: './src/smartdevicemanagement/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/smartdevicemanagement/hooks/preact-query.ts' },
  'solid-query': { output: './src/smartdevicemanagement/hooks/solid-query.ts' },
  'vue-query': { output: './src/smartdevicemanagement/hooks/vue-query.ts' },
  'svelte-query': { output: './src/smartdevicemanagement/hooks/svelte-query.ts' },
  'angular-query': { output: './src/smartdevicemanagement/hooks/angular-query.ts' },
  docs: {
    output: './src/smartdevicemanagement/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
