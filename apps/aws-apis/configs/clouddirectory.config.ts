import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/clouddirectory/2017-01-11/openapi.yaml',
  output: './src/clouddirectory/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/clouddirectory/types.ts' },
  client: { output: './src/clouddirectory/client.ts', baseUrl: '/' },
  rpc: { output: './src/clouddirectory/rpc.ts', parseResponse: true },
  swr: { output: './src/clouddirectory/hooks/swr.ts' },
  'tanstack-query': { output: './src/clouddirectory/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/clouddirectory/hooks/preact-query.ts' },
  'solid-query': { output: './src/clouddirectory/hooks/solid-query.ts' },
  'vue-query': { output: './src/clouddirectory/hooks/vue-query.ts' },
  'svelte-query': { output: './src/clouddirectory/hooks/svelte-query.ts' },
  'angular-query': { output: './src/clouddirectory/hooks/angular-query.ts' },
  docs: {
    output: './src/clouddirectory/api.md',
    curl: true,
    baseUrl: 'https://clouddirectory.us-east-1.amazonaws.com',
  },
})
