import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/comprehend/2017-11-27/openapi.yaml',
  output: './src/comprehend/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/comprehend/types.ts' },
  client: { output: './src/comprehend/client.ts', baseUrl: '/' },
  rpc: { output: './src/comprehend/rpc.ts', parseResponse: true },
  swr: { output: './src/comprehend/hooks/swr.ts' },
  'tanstack-query': { output: './src/comprehend/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/comprehend/hooks/preact-query.ts' },
  'solid-query': { output: './src/comprehend/hooks/solid-query.ts' },
  'vue-query': { output: './src/comprehend/hooks/vue-query.ts' },
  'svelte-query': { output: './src/comprehend/hooks/svelte-query.ts' },
  'angular-query': { output: './src/comprehend/hooks/angular-query.ts' },
  docs: {
    output: './src/comprehend/api.md',
    curl: true,
    baseUrl: 'https://comprehend.us-east-1.amazonaws.com',
  },
})
