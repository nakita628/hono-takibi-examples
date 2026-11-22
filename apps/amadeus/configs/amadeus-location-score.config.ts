import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amadeus.com/amadeus-location-score/1.0.2/openapi.yaml',
  output: './src/amadeus-location-score/routes.ts',
  template: {},
  type: { output: './src/amadeus-location-score/types.ts' },
  client: { output: './src/amadeus-location-score/client.ts', baseUrl: '/' },
  rpc: { output: './src/amadeus-location-score/rpc.ts', parseResponse: true },
  swr: { output: './src/amadeus-location-score/hooks/swr.ts' },
  'tanstack-query': { output: './src/amadeus-location-score/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/amadeus-location-score/hooks/preact-query.ts' },
  'solid-query': { output: './src/amadeus-location-score/hooks/solid-query.ts' },
  'vue-query': { output: './src/amadeus-location-score/hooks/vue-query.ts' },
  'svelte-query': { output: './src/amadeus-location-score/hooks/svelte-query.ts' },
  'angular-query': { output: './src/amadeus-location-score/hooks/angular-query.ts' },
  docs: {
    output: './src/amadeus-location-score/api.md',
    curl: true,
    baseUrl: 'https://test.api.amadeus.com',
  },
})
