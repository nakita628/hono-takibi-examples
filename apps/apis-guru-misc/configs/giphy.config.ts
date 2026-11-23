import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/giphy.com/1.0/openapi.yaml',
  output: './src/giphy/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/giphy/types.ts' },
  client: { output: './src/giphy/client.ts', baseUrl: '/' },
  rpc: { output: './src/giphy/rpc.ts', parseResponse: true },
  swr: { output: './src/giphy/hooks/swr.ts' },
  'tanstack-query': { output: './src/giphy/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/giphy/hooks/preact-query.ts' },
  'solid-query': { output: './src/giphy/hooks/solid-query.ts' },
  'vue-query': { output: './src/giphy/hooks/vue-query.ts' },
  'svelte-query': { output: './src/giphy/hooks/svelte-query.ts' },
  'angular-query': { output: './src/giphy/hooks/angular-query.ts' },
  docs: {
    output: './src/giphy/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
