import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/bharatpetroleum/3.0.0/openapi.yaml',
  output: './src/bharatpetroleum/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/bharatpetroleum/types.ts' },
  client: { output: './src/bharatpetroleum/client.ts', baseUrl: '/' },
  rpc: { output: './src/bharatpetroleum/rpc.ts', parseResponse: true },
  swr: { output: './src/bharatpetroleum/hooks/swr.ts' },
  'tanstack-query': { output: './src/bharatpetroleum/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/bharatpetroleum/hooks/preact-query.ts' },
  'solid-query': { output: './src/bharatpetroleum/hooks/solid-query.ts' },
  'vue-query': { output: './src/bharatpetroleum/hooks/vue-query.ts' },
  'svelte-query': { output: './src/bharatpetroleum/hooks/svelte-query.ts' },
  'angular-query': { output: './src/bharatpetroleum/hooks/angular-query.ts' },
  docs: {
    output: './src/bharatpetroleum/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
