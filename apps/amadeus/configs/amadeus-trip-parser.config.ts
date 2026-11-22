import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amadeus.com/amadeus-trip-parser/3.0.1/openapi.yaml',
  output: './src/amadeus-trip-parser/routes.ts',
  template: {},
  type: { output: './src/amadeus-trip-parser/types.ts' },
  client: { output: './src/amadeus-trip-parser/client.ts', baseUrl: '/' },
  rpc: { output: './src/amadeus-trip-parser/rpc.ts', parseResponse: true },
  swr: { output: './src/amadeus-trip-parser/hooks/swr.ts' },
  'tanstack-query': { output: './src/amadeus-trip-parser/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/amadeus-trip-parser/hooks/preact-query.ts' },
  'solid-query': { output: './src/amadeus-trip-parser/hooks/solid-query.ts' },
  'vue-query': { output: './src/amadeus-trip-parser/hooks/vue-query.ts' },
  'svelte-query': { output: './src/amadeus-trip-parser/hooks/svelte-query.ts' },
  'angular-query': { output: './src/amadeus-trip-parser/hooks/angular-query.ts' },
  docs: {
    output: './src/amadeus-trip-parser/api.md',
    curl: true,
    baseUrl: 'https://test.api.amadeus.com',
  },
})
