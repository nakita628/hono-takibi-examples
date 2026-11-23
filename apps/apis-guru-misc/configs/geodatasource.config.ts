import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/geodatasource.com/1.0/openapi.yaml',
  output: './src/geodatasource/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/geodatasource/types.ts' },
  client: { output: './src/geodatasource/client.ts', baseUrl: '/' },
  rpc: { output: './src/geodatasource/rpc.ts', parseResponse: true },
  swr: { output: './src/geodatasource/hooks/swr.ts' },
  'tanstack-query': { output: './src/geodatasource/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/geodatasource/hooks/preact-query.ts' },
  'solid-query': { output: './src/geodatasource/hooks/solid-query.ts' },
  'vue-query': { output: './src/geodatasource/hooks/vue-query.ts' },
  'svelte-query': { output: './src/geodatasource/hooks/svelte-query.ts' },
  'angular-query': { output: './src/geodatasource/hooks/angular-query.ts' },
  docs: {
    output: './src/geodatasource/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
