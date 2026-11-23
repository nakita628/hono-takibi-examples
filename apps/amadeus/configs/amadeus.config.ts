import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amadeus.com/2.2.0/openapi.yaml',
  output: './src/amadeus/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/amadeus/types.ts' },
  client: { output: './src/amadeus/client.ts', baseUrl: '/' },
  rpc: { output: './src/amadeus/rpc.ts', parseResponse: true },
  swr: { output: './src/amadeus/hooks/swr.ts' },
  'tanstack-query': { output: './src/amadeus/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/amadeus/hooks/preact-query.ts' },
  'solid-query': { output: './src/amadeus/hooks/solid-query.ts' },
  'vue-query': { output: './src/amadeus/hooks/vue-query.ts' },
  'svelte-query': { output: './src/amadeus/hooks/svelte-query.ts' },
  'angular-query': { output: './src/amadeus/hooks/angular-query.ts' },
  docs: {
    output: './src/amadeus/api.md',
    curl: true,
    baseUrl: 'https://test.api.amadeus.com',
  },
})
