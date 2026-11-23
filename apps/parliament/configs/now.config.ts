import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/parliament.uk/now/v1/openapi.yaml',
  output: './src/now/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/now/types.ts' },
  client: { output: './src/now/client.ts', baseUrl: '/' },
  rpc: { output: './src/now/rpc.ts', parseResponse: true },
  swr: { output: './src/now/hooks/swr.ts' },
  'tanstack-query': { output: './src/now/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/now/hooks/preact-query.ts' },
  'solid-query': { output: './src/now/hooks/solid-query.ts' },
  'vue-query': { output: './src/now/hooks/vue-query.ts' },
  'svelte-query': { output: './src/now/hooks/svelte-query.ts' },
  'angular-query': { output: './src/now/hooks/angular-query.ts' },
  docs: {
    output: './src/now/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
