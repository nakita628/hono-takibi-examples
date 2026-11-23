import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/brainbi.net/1.0.0/openapi.yaml',
  output: './src/brainbi-net/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/brainbi-net/types.ts' },
  client: { output: './src/brainbi-net/client.ts', baseUrl: '/' },
  rpc: { output: './src/brainbi-net/rpc.ts', parseResponse: true },
  swr: { output: './src/brainbi-net/hooks/swr.ts' },
  'tanstack-query': { output: './src/brainbi-net/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/brainbi-net/hooks/preact-query.ts' },
  'solid-query': { output: './src/brainbi-net/hooks/solid-query.ts' },
  'vue-query': { output: './src/brainbi-net/hooks/vue-query.ts' },
  'svelte-query': { output: './src/brainbi-net/hooks/svelte-query.ts' },
  'angular-query': { output: './src/brainbi-net/hooks/angular-query.ts' },
  docs: {
    output: './src/brainbi-net/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
