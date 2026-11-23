import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/surevoip.co.uk/9dcb0dc8/openapi.yaml',
  output: './src/surevoip-co-uk/routes.ts',
  template: {},
  type: { output: './src/surevoip-co-uk/types.ts' },
  client: { output: './src/surevoip-co-uk/client.ts', baseUrl: '/' },
  rpc: { output: './src/surevoip-co-uk/rpc.ts', parseResponse: true },
  swr: { output: './src/surevoip-co-uk/hooks/swr.ts' },
  'tanstack-query': { output: './src/surevoip-co-uk/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/surevoip-co-uk/hooks/preact-query.ts' },
  'solid-query': { output: './src/surevoip-co-uk/hooks/solid-query.ts' },
  'vue-query': { output: './src/surevoip-co-uk/hooks/vue-query.ts' },
  'svelte-query': { output: './src/surevoip-co-uk/hooks/svelte-query.ts' },
  'angular-query': { output: './src/surevoip-co-uk/hooks/angular-query.ts' },
  docs: {
    output: './src/surevoip-co-uk/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
