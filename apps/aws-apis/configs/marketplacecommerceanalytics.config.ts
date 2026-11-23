import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/marketplacecommerceanalytics/2015-07-01/openapi.yaml',
  output: './src/marketplacecommerceanalytics/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/marketplacecommerceanalytics/types.ts' },
  client: { output: './src/marketplacecommerceanalytics/client.ts', baseUrl: '/' },
  rpc: { output: './src/marketplacecommerceanalytics/rpc.ts', parseResponse: true },
  swr: { output: './src/marketplacecommerceanalytics/hooks/swr.ts' },
  'tanstack-query': { output: './src/marketplacecommerceanalytics/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/marketplacecommerceanalytics/hooks/preact-query.ts' },
  'solid-query': { output: './src/marketplacecommerceanalytics/hooks/solid-query.ts' },
  'vue-query': { output: './src/marketplacecommerceanalytics/hooks/vue-query.ts' },
  'svelte-query': { output: './src/marketplacecommerceanalytics/hooks/svelte-query.ts' },
  'angular-query': { output: './src/marketplacecommerceanalytics/hooks/angular-query.ts' },
  docs: {
    output: './src/marketplacecommerceanalytics/api.md',
    curl: true,
    baseUrl: 'https://marketplacecommerceanalytics.us-east-1.amazonaws.com',
  },
})
