import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/ram/2018-01-04/openapi.yaml',
  output: './src/ram/routes.ts',
  template: {},
  type: { output: './src/ram/types.ts' },
  client: { output: './src/ram/client.ts', baseUrl: '/' },
  rpc: { output: './src/ram/rpc.ts', parseResponse: true },
  swr: { output: './src/ram/hooks/swr.ts' },
  'tanstack-query': { output: './src/ram/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ram/hooks/preact-query.ts' },
  'solid-query': { output: './src/ram/hooks/solid-query.ts' },
  'vue-query': { output: './src/ram/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ram/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ram/hooks/angular-query.ts' },
  docs: {
    output: './src/ram/api.md',
    curl: true,
    baseUrl: 'https://ram.us-east-1.amazonaws.com',
  },
})
