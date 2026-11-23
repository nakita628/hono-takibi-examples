import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/iam/2010-05-08/openapi.yaml',
  output: './src/iam/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/iam/types.ts' },
  client: { output: './src/iam/client.ts', baseUrl: '/' },
  rpc: { output: './src/iam/rpc.ts', parseResponse: true },
  swr: { output: './src/iam/hooks/swr.ts' },
  'tanstack-query': { output: './src/iam/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/iam/hooks/preact-query.ts' },
  'solid-query': { output: './src/iam/hooks/solid-query.ts' },
  'vue-query': { output: './src/iam/hooks/vue-query.ts' },
  'svelte-query': { output: './src/iam/hooks/svelte-query.ts' },
  'angular-query': { output: './src/iam/hooks/angular-query.ts' },
  docs: {
    output: './src/iam/api.md',
    curl: true,
    baseUrl: 'https://iam.us-east-1.amazonaws.com',
  },
})
