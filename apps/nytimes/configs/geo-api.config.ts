import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nytimes.com/geo_api/1.0.0/openapi.yaml',
  output: './src/geo-api/routes.ts',
  template: {},
  type: { output: './src/geo-api/types.ts' },
  client: { output: './src/geo-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/geo-api/rpc.ts', parseResponse: true },
  swr: { output: './src/geo-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/geo-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/geo-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/geo-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/geo-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/geo-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/geo-api/hooks/angular-query.ts' },
  docs: {
    output: './src/geo-api/api.md',
    curl: true,
    baseUrl: 'https://api.nytimes.com/svc',
  },
})
