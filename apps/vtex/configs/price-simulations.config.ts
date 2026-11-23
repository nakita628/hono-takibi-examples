import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Price-Simulations/1.0/openapi.yaml',
  output: './src/price-simulations/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/price-simulations/types.ts' },
  client: { output: './src/price-simulations/client.ts', baseUrl: '/' },
  rpc: { output: './src/price-simulations/rpc.ts', parseResponse: true },
  swr: { output: './src/price-simulations/hooks/swr.ts' },
  'tanstack-query': { output: './src/price-simulations/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/price-simulations/hooks/preact-query.ts' },
  'solid-query': { output: './src/price-simulations/hooks/solid-query.ts' },
  'vue-query': { output: './src/price-simulations/hooks/vue-query.ts' },
  'svelte-query': { output: './src/price-simulations/hooks/svelte-query.ts' },
  'angular-query': { output: './src/price-simulations/hooks/angular-query.ts' },
  docs: {
    output: './src/price-simulations/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
