import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/sqs/2012-11-05/openapi.yaml',
  output: './src/sqs/routes.ts',
  template: {},
  type: { output: './src/sqs/types.ts' },
  client: { output: './src/sqs/client.ts', baseUrl: '/' },
  rpc: { output: './src/sqs/rpc.ts', parseResponse: true },
  swr: { output: './src/sqs/hooks/swr.ts' },
  'tanstack-query': { output: './src/sqs/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sqs/hooks/preact-query.ts' },
  'solid-query': { output: './src/sqs/hooks/solid-query.ts' },
  'vue-query': { output: './src/sqs/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sqs/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sqs/hooks/angular-query.ts' },
  docs: {
    output: './src/sqs/api.md',
    curl: true,
    baseUrl: 'https://sqs.us-east-1.amazonaws.com',
  },
})
