import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/va.gov/benefits/1.0.0/openapi.yaml',
  output: './src/va-gov-benefits/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/va-gov-benefits/types.ts' },
  client: { output: './src/va-gov-benefits/client.ts', baseUrl: '/' },
  rpc: { output: './src/va-gov-benefits/rpc.ts', parseResponse: true },
  swr: { output: './src/va-gov-benefits/hooks/swr.ts' },
  'tanstack-query': { output: './src/va-gov-benefits/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/va-gov-benefits/hooks/preact-query.ts' },
  'solid-query': { output: './src/va-gov-benefits/hooks/solid-query.ts' },
  'vue-query': { output: './src/va-gov-benefits/hooks/vue-query.ts' },
  'svelte-query': { output: './src/va-gov-benefits/hooks/svelte-query.ts' },
  'angular-query': { output: './src/va-gov-benefits/hooks/angular-query.ts' },
  docs: {
    output: './src/va-gov-benefits/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
