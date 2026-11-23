import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/gerermesaffaires.com/1.0.6/openapi.yaml',
  output: './src/gerermesaffaires/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/gerermesaffaires/types.ts' },
  client: { output: './src/gerermesaffaires/client.ts', baseUrl: '/' },
  rpc: { output: './src/gerermesaffaires/rpc.ts', parseResponse: true },
  swr: { output: './src/gerermesaffaires/hooks/swr.ts' },
  'tanstack-query': { output: './src/gerermesaffaires/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/gerermesaffaires/hooks/preact-query.ts' },
  'solid-query': { output: './src/gerermesaffaires/hooks/solid-query.ts' },
  'vue-query': { output: './src/gerermesaffaires/hooks/vue-query.ts' },
  'svelte-query': { output: './src/gerermesaffaires/hooks/svelte-query.ts' },
  'angular-query': { output: './src/gerermesaffaires/hooks/angular-query.ts' },
  docs: {
    output: './src/gerermesaffaires/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
