import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interactivebrokers.com/1.0.0/openapi.yaml',
  output: './src/interactivebrokers/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/interactivebrokers/types.ts' },
  client: { output: './src/interactivebrokers/client.ts', baseUrl: '/' },
  rpc: { output: './src/interactivebrokers/rpc.ts', parseResponse: true },
  swr: { output: './src/interactivebrokers/hooks/swr.ts' },
  'tanstack-query': { output: './src/interactivebrokers/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/interactivebrokers/hooks/preact-query.ts' },
  'solid-query': { output: './src/interactivebrokers/hooks/solid-query.ts' },
  'vue-query': { output: './src/interactivebrokers/hooks/vue-query.ts' },
  'svelte-query': { output: './src/interactivebrokers/hooks/svelte-query.ts' },
  'angular-query': { output: './src/interactivebrokers/hooks/angular-query.ts' },
  docs: {
    output: './src/interactivebrokers/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
