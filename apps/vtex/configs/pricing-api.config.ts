import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Pricing-API/1.0/openapi.yaml',
  output: './src/pricing-api/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/pricing-api/types.ts' },
  client: { output: './src/pricing-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/pricing-api/rpc.ts', parseResponse: true },
  swr: { output: './src/pricing-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/pricing-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/pricing-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/pricing-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/pricing-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/pricing-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/pricing-api/hooks/angular-query.ts' },
  docs: {
    output: './src/pricing-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
