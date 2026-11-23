import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/mq/2017-11-27/openapi.yaml',
  output: './src/mq/routes.ts',
  template: {},
  type: { output: './src/mq/types.ts' },
  client: { output: './src/mq/client.ts', baseUrl: '/' },
  rpc: { output: './src/mq/rpc.ts', parseResponse: true },
  swr: { output: './src/mq/hooks/swr.ts' },
  'tanstack-query': { output: './src/mq/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mq/hooks/preact-query.ts' },
  'solid-query': { output: './src/mq/hooks/solid-query.ts' },
  'vue-query': { output: './src/mq/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mq/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mq/hooks/angular-query.ts' },
  docs: {
    output: './src/mq/api.md',
    curl: true,
    baseUrl: 'https://mq.us-east-1.amazonaws.com',
  },
})
