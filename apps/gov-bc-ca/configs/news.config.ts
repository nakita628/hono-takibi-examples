import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/gov.bc.ca/news/1.0/openapi.yaml',
  output: './src/news/routes.ts',
  template: {},
  type: { output: './src/news/types.ts' },
  client: { output: './src/news/client.ts', baseUrl: '/' },
  rpc: { output: './src/news/rpc.ts', parseResponse: true },
  swr: { output: './src/news/hooks/swr.ts' },
  'tanstack-query': { output: './src/news/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/news/hooks/preact-query.ts' },
  'solid-query': { output: './src/news/hooks/solid-query.ts' },
  'vue-query': { output: './src/news/hooks/vue-query.ts' },
  'svelte-query': { output: './src/news/hooks/svelte-query.ts' },
  'angular-query': { output: './src/news/hooks/angular-query.ts' },
  docs: {
    output: './src/news/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
