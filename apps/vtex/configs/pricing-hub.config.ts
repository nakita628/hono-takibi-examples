import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Pricing-Hub/1.0/openapi.yaml',
  output: './src/pricing-hub/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/pricing-hub/types.ts' },
  client: { output: './src/pricing-hub/client.ts', baseUrl: '/' },
  rpc: { output: './src/pricing-hub/rpc.ts', parseResponse: true },
  swr: { output: './src/pricing-hub/hooks/swr.ts' },
  'tanstack-query': { output: './src/pricing-hub/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/pricing-hub/hooks/preact-query.ts' },
  'solid-query': { output: './src/pricing-hub/hooks/solid-query.ts' },
  'vue-query': { output: './src/pricing-hub/hooks/vue-query.ts' },
  'svelte-query': { output: './src/pricing-hub/hooks/svelte-query.ts' },
  'angular-query': { output: './src/pricing-hub/hooks/angular-query.ts' },
  docs: {
    output: './src/pricing-hub/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
