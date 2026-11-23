import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/kafka/2018-11-14/openapi.yaml',
  output: './src/kafka/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/kafka/types.ts' },
  client: { output: './src/kafka/client.ts', baseUrl: '/' },
  rpc: { output: './src/kafka/rpc.ts', parseResponse: true },
  swr: { output: './src/kafka/hooks/swr.ts' },
  'tanstack-query': { output: './src/kafka/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/kafka/hooks/preact-query.ts' },
  'solid-query': { output: './src/kafka/hooks/solid-query.ts' },
  'vue-query': { output: './src/kafka/hooks/vue-query.ts' },
  'svelte-query': { output: './src/kafka/hooks/svelte-query.ts' },
  'angular-query': { output: './src/kafka/hooks/angular-query.ts' },
  docs: {
    output: './src/kafka/api.md',
    curl: true,
    baseUrl: 'https://kafka.us-east-1.amazonaws.com',
  },
})
