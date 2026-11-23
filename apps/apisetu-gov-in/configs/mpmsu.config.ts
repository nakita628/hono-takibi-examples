import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/mpmsu/3.0.0/openapi.yaml',
  output: './src/mpmsu/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/mpmsu/types.ts' },
  client: { output: './src/mpmsu/client.ts', baseUrl: '/' },
  rpc: { output: './src/mpmsu/rpc.ts', parseResponse: true },
  swr: { output: './src/mpmsu/hooks/swr.ts' },
  'tanstack-query': { output: './src/mpmsu/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mpmsu/hooks/preact-query.ts' },
  'solid-query': { output: './src/mpmsu/hooks/solid-query.ts' },
  'vue-query': { output: './src/mpmsu/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mpmsu/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mpmsu/hooks/angular-query.ts' },
  docs: {
    output: './src/mpmsu/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
