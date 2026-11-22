import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/firehose/2015-08-04/openapi.yaml',
  output: './src/firehose/routes.ts',
  template: {},
  type: { output: './src/firehose/types.ts' },
  client: { output: './src/firehose/client.ts', baseUrl: '/' },
  rpc: { output: './src/firehose/rpc.ts', parseResponse: true },
  swr: { output: './src/firehose/hooks/swr.ts' },
  'tanstack-query': { output: './src/firehose/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/firehose/hooks/preact-query.ts' },
  'solid-query': { output: './src/firehose/hooks/solid-query.ts' },
  'vue-query': { output: './src/firehose/hooks/vue-query.ts' },
  'svelte-query': { output: './src/firehose/hooks/svelte-query.ts' },
  'angular-query': { output: './src/firehose/hooks/angular-query.ts' },
  docs: {
    output: './src/firehose/api.md',
    curl: true,
    baseUrl: 'https://firehose.us-east-1.amazonaws.com',
  },
})
