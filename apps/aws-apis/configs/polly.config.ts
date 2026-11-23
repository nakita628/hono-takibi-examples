import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/polly/2016-06-10/openapi.yaml',
  output: './src/polly/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/polly/types.ts' },
  client: { output: './src/polly/client.ts', baseUrl: '/' },
  rpc: { output: './src/polly/rpc.ts', parseResponse: true },
  swr: { output: './src/polly/hooks/swr.ts' },
  'tanstack-query': { output: './src/polly/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/polly/hooks/preact-query.ts' },
  'solid-query': { output: './src/polly/hooks/solid-query.ts' },
  'vue-query': { output: './src/polly/hooks/vue-query.ts' },
  'svelte-query': { output: './src/polly/hooks/svelte-query.ts' },
  'angular-query': { output: './src/polly/hooks/angular-query.ts' },
  docs: {
    output: './src/polly/api.md',
    curl: true,
    baseUrl: 'https://polly.us-east-1.amazonaws.com',
  },
})
