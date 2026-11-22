import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/customsearch/v1/openapi.yaml',
  output: './src/customsearch/routes.ts',
  template: {},
  type: { output: './src/customsearch/types.ts' },
  client: { output: './src/customsearch/client.ts', baseUrl: '/' },
  rpc: { output: './src/customsearch/rpc.ts', parseResponse: true },
  swr: { output: './src/customsearch/hooks/swr.ts' },
  'tanstack-query': { output: './src/customsearch/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/customsearch/hooks/preact-query.ts' },
  'solid-query': { output: './src/customsearch/hooks/solid-query.ts' },
  'vue-query': { output: './src/customsearch/hooks/vue-query.ts' },
  'svelte-query': { output: './src/customsearch/hooks/svelte-query.ts' },
  'angular-query': { output: './src/customsearch/hooks/angular-query.ts' },
  docs: {
    output: './src/customsearch/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
