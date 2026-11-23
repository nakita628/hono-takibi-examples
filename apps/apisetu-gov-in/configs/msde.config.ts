import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/msde/3.0.0/openapi.yaml',
  output: './src/msde/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/msde/types.ts' },
  client: { output: './src/msde/client.ts', baseUrl: '/' },
  rpc: { output: './src/msde/rpc.ts', parseResponse: true },
  swr: { output: './src/msde/hooks/swr.ts' },
  'tanstack-query': { output: './src/msde/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/msde/hooks/preact-query.ts' },
  'solid-query': { output: './src/msde/hooks/solid-query.ts' },
  'vue-query': { output: './src/msde/hooks/vue-query.ts' },
  'svelte-query': { output: './src/msde/hooks/svelte-query.ts' },
  'angular-query': { output: './src/msde/hooks/angular-query.ts' },
  docs: {
    output: './src/msde/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
