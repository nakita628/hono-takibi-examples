import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/squareup.com/2.0/openapi.yaml',
  output: './src/squareup/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/squareup/types.ts' },
  client: { output: './src/squareup/client.ts', baseUrl: '/' },
  rpc: { output: './src/squareup/rpc.ts', parseResponse: true },
  swr: { output: './src/squareup/hooks/swr.ts' },
  'tanstack-query': { output: './src/squareup/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/squareup/hooks/preact-query.ts' },
  'solid-query': { output: './src/squareup/hooks/solid-query.ts' },
  'vue-query': { output: './src/squareup/hooks/vue-query.ts' },
  'svelte-query': { output: './src/squareup/hooks/svelte-query.ts' },
  'angular-query': { output: './src/squareup/hooks/angular-query.ts' },
  docs: {
    output: './src/squareup/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
