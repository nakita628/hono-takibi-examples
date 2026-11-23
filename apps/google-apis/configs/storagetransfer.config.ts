import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/storagetransfer/v1/openapi.yaml',
  output: './src/storagetransfer/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/storagetransfer/types.ts' },
  client: { output: './src/storagetransfer/client.ts', baseUrl: '/' },
  rpc: { output: './src/storagetransfer/rpc.ts', parseResponse: true },
  swr: { output: './src/storagetransfer/hooks/swr.ts' },
  'tanstack-query': { output: './src/storagetransfer/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/storagetransfer/hooks/preact-query.ts' },
  'solid-query': { output: './src/storagetransfer/hooks/solid-query.ts' },
  'vue-query': { output: './src/storagetransfer/hooks/vue-query.ts' },
  'svelte-query': { output: './src/storagetransfer/hooks/svelte-query.ts' },
  'angular-query': { output: './src/storagetransfer/hooks/angular-query.ts' },
  docs: {
    output: './src/storagetransfer/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
