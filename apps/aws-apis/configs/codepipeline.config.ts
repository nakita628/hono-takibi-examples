import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/codepipeline/2015-07-09/openapi.yaml',
  output: './src/codepipeline/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/codepipeline/types.ts' },
  client: { output: './src/codepipeline/client.ts', baseUrl: '/' },
  rpc: { output: './src/codepipeline/rpc.ts', parseResponse: true },
  swr: { output: './src/codepipeline/hooks/swr.ts' },
  'tanstack-query': { output: './src/codepipeline/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/codepipeline/hooks/preact-query.ts' },
  'solid-query': { output: './src/codepipeline/hooks/solid-query.ts' },
  'vue-query': { output: './src/codepipeline/hooks/vue-query.ts' },
  'svelte-query': { output: './src/codepipeline/hooks/svelte-query.ts' },
  'angular-query': { output: './src/codepipeline/hooks/angular-query.ts' },
  docs: {
    output: './src/codepipeline/api.md',
    curl: true,
    baseUrl: 'https://codepipeline.us-east-1.amazonaws.com',
  },
})
