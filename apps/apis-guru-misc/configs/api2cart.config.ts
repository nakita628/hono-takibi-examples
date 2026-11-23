import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/api2cart.com/1.1/openapi.yaml',
  output: './src/api2cart/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/api2cart/types.ts' },
  client: { output: './src/api2cart/client.ts', baseUrl: '/' },
  rpc: { output: './src/api2cart/rpc.ts', parseResponse: true },
  swr: { output: './src/api2cart/hooks/swr.ts' },
  'tanstack-query': { output: './src/api2cart/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/api2cart/hooks/preact-query.ts' },
  'solid-query': { output: './src/api2cart/hooks/solid-query.ts' },
  'vue-query': { output: './src/api2cart/hooks/vue-query.ts' },
  'svelte-query': { output: './src/api2cart/hooks/svelte-query.ts' },
  'angular-query': { output: './src/api2cart/hooks/angular-query.ts' },
  docs: {
    output: './src/api2cart/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
