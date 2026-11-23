import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/finspace/2021-03-12/openapi.yaml',
  output: './src/finspace/routes.ts',
  template: {},
  type: { output: './src/finspace/types.ts' },
  client: { output: './src/finspace/client.ts', baseUrl: '/' },
  rpc: { output: './src/finspace/rpc.ts', parseResponse: true },
  swr: { output: './src/finspace/hooks/swr.ts' },
  'tanstack-query': { output: './src/finspace/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/finspace/hooks/preact-query.ts' },
  'solid-query': { output: './src/finspace/hooks/solid-query.ts' },
  'vue-query': { output: './src/finspace/hooks/vue-query.ts' },
  'svelte-query': { output: './src/finspace/hooks/svelte-query.ts' },
  'angular-query': { output: './src/finspace/hooks/angular-query.ts' },
  docs: {
    output: './src/finspace/api.md',
    curl: true,
    baseUrl: 'https://finspace.us-east-1.amazonaws.com',
  },
})
