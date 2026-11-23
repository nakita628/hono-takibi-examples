import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/proximitybeacon/v1beta1/openapi.yaml',
  output: './src/proximitybeacon/routes.ts',
  template: {},
  type: { output: './src/proximitybeacon/types.ts' },
  client: { output: './src/proximitybeacon/client.ts', baseUrl: '/' },
  rpc: { output: './src/proximitybeacon/rpc.ts', parseResponse: true },
  swr: { output: './src/proximitybeacon/hooks/swr.ts' },
  'tanstack-query': { output: './src/proximitybeacon/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/proximitybeacon/hooks/preact-query.ts' },
  'solid-query': { output: './src/proximitybeacon/hooks/solid-query.ts' },
  'vue-query': { output: './src/proximitybeacon/hooks/vue-query.ts' },
  'svelte-query': { output: './src/proximitybeacon/hooks/svelte-query.ts' },
  'angular-query': { output: './src/proximitybeacon/hooks/angular-query.ts' },
  docs: {
    output: './src/proximitybeacon/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
