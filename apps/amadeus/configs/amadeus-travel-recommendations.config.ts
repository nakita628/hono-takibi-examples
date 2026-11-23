import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amadeus.com/amadeus-travel-recommendations/1.0.3/openapi.yaml',
  output: './src/amadeus-travel-recommendations/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/amadeus-travel-recommendations/types.ts' },
  client: { output: './src/amadeus-travel-recommendations/client.ts', baseUrl: '/' },
  rpc: { output: './src/amadeus-travel-recommendations/rpc.ts', parseResponse: true },
  swr: { output: './src/amadeus-travel-recommendations/hooks/swr.ts' },
  'tanstack-query': { output: './src/amadeus-travel-recommendations/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/amadeus-travel-recommendations/hooks/preact-query.ts' },
  'solid-query': { output: './src/amadeus-travel-recommendations/hooks/solid-query.ts' },
  'vue-query': { output: './src/amadeus-travel-recommendations/hooks/vue-query.ts' },
  'svelte-query': { output: './src/amadeus-travel-recommendations/hooks/svelte-query.ts' },
  'angular-query': { output: './src/amadeus-travel-recommendations/hooks/angular-query.ts' },
  docs: {
    output: './src/amadeus-travel-recommendations/api.md',
    curl: true,
    baseUrl: 'https://test.api.amadeus.com',
  },
})
