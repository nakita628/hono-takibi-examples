import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/fulfillment.com/2.0/openapi.yaml',
  output: './src/fulfillment/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/fulfillment/types.ts' },
  client: { output: './src/fulfillment/client.ts', baseUrl: '/' },
  rpc: { output: './src/fulfillment/rpc.ts', parseResponse: true },
  swr: { output: './src/fulfillment/hooks/swr.ts' },
  'tanstack-query': { output: './src/fulfillment/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/fulfillment/hooks/preact-query.ts' },
  'solid-query': { output: './src/fulfillment/hooks/solid-query.ts' },
  'vue-query': { output: './src/fulfillment/hooks/vue-query.ts' },
  'svelte-query': { output: './src/fulfillment/hooks/svelte-query.ts' },
  'angular-query': { output: './src/fulfillment/hooks/angular-query.ts' },
  docs: {
    output: './src/fulfillment/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
