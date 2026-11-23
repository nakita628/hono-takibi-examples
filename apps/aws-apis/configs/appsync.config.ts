import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/appsync/2017-07-25/openapi.yaml',
  output: './src/appsync/routes.ts',
  template: {},
  type: { output: './src/appsync/types.ts' },
  client: { output: './src/appsync/client.ts', baseUrl: '/' },
  rpc: { output: './src/appsync/rpc.ts', parseResponse: true },
  swr: { output: './src/appsync/hooks/swr.ts' },
  'tanstack-query': { output: './src/appsync/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/appsync/hooks/preact-query.ts' },
  'solid-query': { output: './src/appsync/hooks/solid-query.ts' },
  'vue-query': { output: './src/appsync/hooks/vue-query.ts' },
  'svelte-query': { output: './src/appsync/hooks/svelte-query.ts' },
  'angular-query': { output: './src/appsync/hooks/angular-query.ts' },
  docs: {
    output: './src/appsync/api.md',
    curl: true,
    baseUrl: 'https://appsync.us-east-1.amazonaws.com',
  },
})
