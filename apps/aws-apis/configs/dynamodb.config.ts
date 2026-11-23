import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/dynamodb/2012-08-10/openapi.yaml',
  output: './src/dynamodb/routes.ts',
  template: {},
  type: { output: './src/dynamodb/types.ts' },
  client: { output: './src/dynamodb/client.ts', baseUrl: '/' },
  rpc: { output: './src/dynamodb/rpc.ts', parseResponse: true },
  swr: { output: './src/dynamodb/hooks/swr.ts' },
  'tanstack-query': { output: './src/dynamodb/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/dynamodb/hooks/preact-query.ts' },
  'solid-query': { output: './src/dynamodb/hooks/solid-query.ts' },
  'vue-query': { output: './src/dynamodb/hooks/vue-query.ts' },
  'svelte-query': { output: './src/dynamodb/hooks/svelte-query.ts' },
  'angular-query': { output: './src/dynamodb/hooks/angular-query.ts' },
  docs: {
    output: './src/dynamodb/api.md',
    curl: true,
    baseUrl: 'https://dynamodb.us-east-1.amazonaws.com',
  },
})
