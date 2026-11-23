import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/kinesis/2013-12-02/openapi.yaml',
  output: './src/kinesis/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/kinesis/types.ts' },
  client: { output: './src/kinesis/client.ts', baseUrl: '/' },
  rpc: { output: './src/kinesis/rpc.ts', parseResponse: true },
  swr: { output: './src/kinesis/hooks/swr.ts' },
  'tanstack-query': { output: './src/kinesis/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/kinesis/hooks/preact-query.ts' },
  'solid-query': { output: './src/kinesis/hooks/solid-query.ts' },
  'vue-query': { output: './src/kinesis/hooks/vue-query.ts' },
  'svelte-query': { output: './src/kinesis/hooks/svelte-query.ts' },
  'angular-query': { output: './src/kinesis/hooks/angular-query.ts' },
  docs: {
    output: './src/kinesis/api.md',
    curl: true,
    baseUrl: 'https://kinesis.us-east-1.amazonaws.com',
  },
})
