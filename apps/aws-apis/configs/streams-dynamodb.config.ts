import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/streams.dynamodb/2012-08-10/openapi.yaml',
  output: './src/streams-dynamodb/routes.ts',
  template: {},
  type: { output: './src/streams-dynamodb/types.ts' },
  client: { output: './src/streams-dynamodb/client.ts', baseUrl: '/' },
  rpc: { output: './src/streams-dynamodb/rpc.ts', parseResponse: true },
  swr: { output: './src/streams-dynamodb/hooks/swr.ts' },
  'tanstack-query': { output: './src/streams-dynamodb/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/streams-dynamodb/hooks/preact-query.ts' },
  'solid-query': { output: './src/streams-dynamodb/hooks/solid-query.ts' },
  'vue-query': { output: './src/streams-dynamodb/hooks/vue-query.ts' },
  'svelte-query': { output: './src/streams-dynamodb/hooks/svelte-query.ts' },
  'angular-query': { output: './src/streams-dynamodb/hooks/angular-query.ts' },
  docs: {
    output: './src/streams-dynamodb/api.md',
    curl: true,
    baseUrl: 'https://streams-dynamodb.us-east-1.amazonaws.com',
  },
})
