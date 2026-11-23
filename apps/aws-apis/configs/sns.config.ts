import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/sns/2010-03-31/openapi.yaml',
  output: './src/sns/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/sns/types.ts' },
  client: { output: './src/sns/client.ts', baseUrl: '/' },
  rpc: { output: './src/sns/rpc.ts', parseResponse: true },
  swr: { output: './src/sns/hooks/swr.ts' },
  'tanstack-query': { output: './src/sns/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sns/hooks/preact-query.ts' },
  'solid-query': { output: './src/sns/hooks/solid-query.ts' },
  'vue-query': { output: './src/sns/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sns/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sns/hooks/angular-query.ts' },
  docs: {
    output: './src/sns/api.md',
    curl: true,
    baseUrl: 'https://sns.us-east-1.amazonaws.com',
  },
})
