import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amadeus.com/amadeus-flight-price-analysis/1.0.1/openapi.yaml',
  output: './src/amadeus-flight-price-analysis/routes.ts',
  template: {},
  type: { output: './src/amadeus-flight-price-analysis/types.ts' },
  client: { output: './src/amadeus-flight-price-analysis/client.ts', baseUrl: '/' },
  rpc: { output: './src/amadeus-flight-price-analysis/rpc.ts', parseResponse: true },
  swr: { output: './src/amadeus-flight-price-analysis/hooks/swr.ts' },
  'tanstack-query': { output: './src/amadeus-flight-price-analysis/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/amadeus-flight-price-analysis/hooks/preact-query.ts' },
  'solid-query': { output: './src/amadeus-flight-price-analysis/hooks/solid-query.ts' },
  'vue-query': { output: './src/amadeus-flight-price-analysis/hooks/vue-query.ts' },
  'svelte-query': { output: './src/amadeus-flight-price-analysis/hooks/svelte-query.ts' },
  'angular-query': { output: './src/amadeus-flight-price-analysis/hooks/angular-query.ts' },
  docs: {
    output: './src/amadeus-flight-price-analysis/api.md',
    curl: true,
    baseUrl: 'https://test.api.amadeus.com',
  },
})
