import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/datasette.local/v1/openapi.yaml',
  output: './src/datasette/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/datasette/types.ts' },
  client: { output: './src/datasette/client.ts', baseUrl: '/' },
  rpc: { output: './src/datasette/rpc.ts', parseResponse: true },
  swr: { output: './src/datasette/hooks/swr.ts' },
  'tanstack-query': { output: './src/datasette/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/datasette/hooks/preact-query.ts' },
  'solid-query': { output: './src/datasette/hooks/solid-query.ts' },
  'vue-query': { output: './src/datasette/hooks/vue-query.ts' },
  'svelte-query': { output: './src/datasette/hooks/svelte-query.ts' },
  'angular-query': { output: './src/datasette/hooks/angular-query.ts' },
  docs: {
    output: './src/datasette/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
