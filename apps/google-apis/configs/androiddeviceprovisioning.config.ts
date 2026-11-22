import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/androiddeviceprovisioning/v1/openapi.yaml',
  output: './src/androiddeviceprovisioning/routes.ts',
  template: {},
  type: { output: './src/androiddeviceprovisioning/types.ts' },
  client: { output: './src/androiddeviceprovisioning/client.ts', baseUrl: '/' },
  rpc: { output: './src/androiddeviceprovisioning/rpc.ts', parseResponse: true },
  swr: { output: './src/androiddeviceprovisioning/hooks/swr.ts' },
  'tanstack-query': { output: './src/androiddeviceprovisioning/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/androiddeviceprovisioning/hooks/preact-query.ts' },
  'solid-query': { output: './src/androiddeviceprovisioning/hooks/solid-query.ts' },
  'vue-query': { output: './src/androiddeviceprovisioning/hooks/vue-query.ts' },
  'svelte-query': { output: './src/androiddeviceprovisioning/hooks/svelte-query.ts' },
  'angular-query': { output: './src/androiddeviceprovisioning/hooks/angular-query.ts' },
  docs: {
    output: './src/androiddeviceprovisioning/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
