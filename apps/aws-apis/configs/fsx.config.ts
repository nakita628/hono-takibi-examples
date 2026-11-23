import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/fsx/2018-03-01/openapi.yaml',
  output: './src/fsx/routes.ts',
  template: {},
  type: { output: './src/fsx/types.ts' },
  client: { output: './src/fsx/client.ts', baseUrl: '/' },
  rpc: { output: './src/fsx/rpc.ts', parseResponse: true },
  swr: { output: './src/fsx/hooks/swr.ts' },
  'tanstack-query': { output: './src/fsx/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/fsx/hooks/preact-query.ts' },
  'solid-query': { output: './src/fsx/hooks/solid-query.ts' },
  'vue-query': { output: './src/fsx/hooks/vue-query.ts' },
  'svelte-query': { output: './src/fsx/hooks/svelte-query.ts' },
  'angular-query': { output: './src/fsx/hooks/angular-query.ts' },
  docs: {
    output: './src/fsx/api.md',
    curl: true,
    baseUrl: 'https://fsx.us-east-1.amazonaws.com',
  },
})
