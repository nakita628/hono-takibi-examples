import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/hindustanpetroleum/3.0.0/openapi.yaml',
  output: './src/hindustanpetroleum/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/hindustanpetroleum/types.ts' },
  client: { output: './src/hindustanpetroleum/client.ts', baseUrl: '/' },
  rpc: { output: './src/hindustanpetroleum/rpc.ts', parseResponse: true },
  swr: { output: './src/hindustanpetroleum/hooks/swr.ts' },
  'tanstack-query': { output: './src/hindustanpetroleum/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hindustanpetroleum/hooks/preact-query.ts' },
  'solid-query': { output: './src/hindustanpetroleum/hooks/solid-query.ts' },
  'vue-query': { output: './src/hindustanpetroleum/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hindustanpetroleum/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hindustanpetroleum/hooks/angular-query.ts' },
  docs: {
    output: './src/hindustanpetroleum/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
