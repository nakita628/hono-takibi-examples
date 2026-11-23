import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/location/2020-11-19/openapi.yaml',
  output: './src/location/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/location/types.ts' },
  client: { output: './src/location/client.ts', baseUrl: '/' },
  rpc: { output: './src/location/rpc.ts', parseResponse: true },
  swr: { output: './src/location/hooks/swr.ts' },
  'tanstack-query': { output: './src/location/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/location/hooks/preact-query.ts' },
  'solid-query': { output: './src/location/hooks/solid-query.ts' },
  'vue-query': { output: './src/location/hooks/vue-query.ts' },
  'svelte-query': { output: './src/location/hooks/svelte-query.ts' },
  'angular-query': { output: './src/location/hooks/angular-query.ts' },
  docs: {
    output: './src/location/api.md',
    curl: true,
    baseUrl: 'https://location.us-east-1.amazonaws.com',
  },
})
