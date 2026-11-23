import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/go-upc.com/1.0.0/openapi.yaml',
  output: './src/go-upc/routes.ts',
  template: {},
  type: { output: './src/go-upc/types.ts' },
  client: { output: './src/go-upc/client.ts', baseUrl: '/' },
  rpc: { output: './src/go-upc/rpc.ts', parseResponse: true },
  swr: { output: './src/go-upc/hooks/swr.ts' },
  'tanstack-query': { output: './src/go-upc/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/go-upc/hooks/preact-query.ts' },
  'solid-query': { output: './src/go-upc/hooks/solid-query.ts' },
  'vue-query': { output: './src/go-upc/hooks/vue-query.ts' },
  'svelte-query': { output: './src/go-upc/hooks/svelte-query.ts' },
  'angular-query': { output: './src/go-upc/hooks/angular-query.ts' },
  docs: {
    output: './src/go-upc/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
