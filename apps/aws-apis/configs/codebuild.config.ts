import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/codebuild/2016-10-06/openapi.yaml',
  output: './src/codebuild/routes.ts',
  template: {},
  type: { output: './src/codebuild/types.ts' },
  client: { output: './src/codebuild/client.ts', baseUrl: '/' },
  rpc: { output: './src/codebuild/rpc.ts', parseResponse: true },
  swr: { output: './src/codebuild/hooks/swr.ts' },
  'tanstack-query': { output: './src/codebuild/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/codebuild/hooks/preact-query.ts' },
  'solid-query': { output: './src/codebuild/hooks/solid-query.ts' },
  'vue-query': { output: './src/codebuild/hooks/vue-query.ts' },
  'svelte-query': { output: './src/codebuild/hooks/svelte-query.ts' },
  'angular-query': { output: './src/codebuild/hooks/angular-query.ts' },
  docs: {
    output: './src/codebuild/api.md',
    curl: true,
    baseUrl: 'https://codebuild.us-east-1.amazonaws.com',
  },
})
