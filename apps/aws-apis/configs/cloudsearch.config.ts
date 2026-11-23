import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/cloudsearch/2013-01-01/openapi.yaml',
  output: './src/cloudsearch/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/cloudsearch/types.ts' },
  client: { output: './src/cloudsearch/client.ts', baseUrl: '/' },
  rpc: { output: './src/cloudsearch/rpc.ts', parseResponse: true },
  swr: { output: './src/cloudsearch/hooks/swr.ts' },
  'tanstack-query': { output: './src/cloudsearch/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cloudsearch/hooks/preact-query.ts' },
  'solid-query': { output: './src/cloudsearch/hooks/solid-query.ts' },
  'vue-query': { output: './src/cloudsearch/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cloudsearch/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cloudsearch/hooks/angular-query.ts' },
  docs: {
    output: './src/cloudsearch/api.md',
    curl: true,
    baseUrl: 'https://cloudsearch.us-east-1.amazonaws.com',
  },
})
