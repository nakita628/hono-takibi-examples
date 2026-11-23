import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/datasync/2018-11-09/openapi.yaml',
  output: './src/datasync/routes.ts',
  template: {},
  type: { output: './src/datasync/types.ts' },
  client: { output: './src/datasync/client.ts', baseUrl: '/' },
  rpc: { output: './src/datasync/rpc.ts', parseResponse: true },
  swr: { output: './src/datasync/hooks/swr.ts' },
  'tanstack-query': { output: './src/datasync/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/datasync/hooks/preact-query.ts' },
  'solid-query': { output: './src/datasync/hooks/solid-query.ts' },
  'vue-query': { output: './src/datasync/hooks/vue-query.ts' },
  'svelte-query': { output: './src/datasync/hooks/svelte-query.ts' },
  'angular-query': { output: './src/datasync/hooks/angular-query.ts' },
  docs: {
    output: './src/datasync/api.md',
    curl: true,
    baseUrl: 'https://datasync.us-east-1.amazonaws.com',
  },
})
