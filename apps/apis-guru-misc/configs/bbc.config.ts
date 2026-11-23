import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/bbc.com/1.0.0/openapi.yaml',
  output: './src/bbc/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/bbc/types.ts' },
  client: { output: './src/bbc/client.ts', baseUrl: '/' },
  rpc: { output: './src/bbc/rpc.ts', parseResponse: true },
  swr: { output: './src/bbc/hooks/swr.ts' },
  'tanstack-query': { output: './src/bbc/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/bbc/hooks/preact-query.ts' },
  'solid-query': { output: './src/bbc/hooks/solid-query.ts' },
  'vue-query': { output: './src/bbc/hooks/vue-query.ts' },
  'svelte-query': { output: './src/bbc/hooks/svelte-query.ts' },
  'angular-query': { output: './src/bbc/hooks/angular-query.ts' },
  docs: {
    output: './src/bbc/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
