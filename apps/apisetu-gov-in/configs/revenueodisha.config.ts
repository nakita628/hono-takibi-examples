import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/revenueodisha/3.0.0/openapi.yaml',
  output: './src/revenueodisha/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/revenueodisha/types.ts' },
  client: { output: './src/revenueodisha/client.ts', baseUrl: '/' },
  rpc: { output: './src/revenueodisha/rpc.ts', parseResponse: true },
  swr: { output: './src/revenueodisha/hooks/swr.ts' },
  'tanstack-query': { output: './src/revenueodisha/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/revenueodisha/hooks/preact-query.ts' },
  'solid-query': { output: './src/revenueodisha/hooks/solid-query.ts' },
  'vue-query': { output: './src/revenueodisha/hooks/vue-query.ts' },
  'svelte-query': { output: './src/revenueodisha/hooks/svelte-query.ts' },
  'angular-query': { output: './src/revenueodisha/hooks/angular-query.ts' },
  docs: {
    output: './src/revenueodisha/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
