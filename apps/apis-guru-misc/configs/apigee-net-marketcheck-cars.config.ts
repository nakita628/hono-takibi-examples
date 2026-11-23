import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apigee.net/marketcheck-cars/2.01/openapi.yaml',
  output: './src/apigee-net-marketcheck-cars/routes.ts',
  template: {},
  type: { output: './src/apigee-net-marketcheck-cars/types.ts' },
  client: { output: './src/apigee-net-marketcheck-cars/client.ts', baseUrl: '/' },
  rpc: { output: './src/apigee-net-marketcheck-cars/rpc.ts', parseResponse: true },
  swr: { output: './src/apigee-net-marketcheck-cars/hooks/swr.ts' },
  'tanstack-query': { output: './src/apigee-net-marketcheck-cars/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/apigee-net-marketcheck-cars/hooks/preact-query.ts' },
  'solid-query': { output: './src/apigee-net-marketcheck-cars/hooks/solid-query.ts' },
  'vue-query': { output: './src/apigee-net-marketcheck-cars/hooks/vue-query.ts' },
  'svelte-query': { output: './src/apigee-net-marketcheck-cars/hooks/svelte-query.ts' },
  'angular-query': { output: './src/apigee-net-marketcheck-cars/hooks/angular-query.ts' },
  docs: {
    output: './src/apigee-net-marketcheck-cars/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
