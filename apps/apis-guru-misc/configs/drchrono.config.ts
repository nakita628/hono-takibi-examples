import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/drchrono.com/v4 (Hunt Valley)/openapi.yaml',
  output: './src/drchrono/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/drchrono/types.ts' },
  client: { output: './src/drchrono/client.ts', baseUrl: '/' },
  rpc: { output: './src/drchrono/rpc.ts', parseResponse: true },
  swr: { output: './src/drchrono/hooks/swr.ts' },
  'tanstack-query': { output: './src/drchrono/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/drchrono/hooks/preact-query.ts' },
  'solid-query': { output: './src/drchrono/hooks/solid-query.ts' },
  'vue-query': { output: './src/drchrono/hooks/vue-query.ts' },
  'svelte-query': { output: './src/drchrono/hooks/svelte-query.ts' },
  'angular-query': { output: './src/drchrono/hooks/angular-query.ts' },
  docs: {
    output: './src/drchrono/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
