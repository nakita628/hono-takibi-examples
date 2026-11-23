import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/finspace-data/2020-07-13/openapi.yaml',
  output: './src/finspace-data/routes.ts',
  template: {},
  type: { output: './src/finspace-data/types.ts' },
  client: { output: './src/finspace-data/client.ts', baseUrl: '/' },
  rpc: { output: './src/finspace-data/rpc.ts', parseResponse: true },
  swr: { output: './src/finspace-data/hooks/swr.ts' },
  'tanstack-query': { output: './src/finspace-data/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/finspace-data/hooks/preact-query.ts' },
  'solid-query': { output: './src/finspace-data/hooks/solid-query.ts' },
  'vue-query': { output: './src/finspace-data/hooks/vue-query.ts' },
  'svelte-query': { output: './src/finspace-data/hooks/svelte-query.ts' },
  'angular-query': { output: './src/finspace-data/hooks/angular-query.ts' },
  docs: {
    output: './src/finspace-data/api.md',
    curl: true,
    baseUrl: 'https://finspace-data.us-east-1.amazonaws.com',
  },
})
