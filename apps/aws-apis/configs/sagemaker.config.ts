import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/sagemaker/2017-07-24/openapi.yaml',
  output: './src/sagemaker/routes.ts',
  template: {},
  type: { output: './src/sagemaker/types.ts' },
  client: { output: './src/sagemaker/client.ts', baseUrl: '/' },
  rpc: { output: './src/sagemaker/rpc.ts', parseResponse: true },
  swr: { output: './src/sagemaker/hooks/swr.ts' },
  'tanstack-query': { output: './src/sagemaker/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sagemaker/hooks/preact-query.ts' },
  'solid-query': { output: './src/sagemaker/hooks/solid-query.ts' },
  'vue-query': { output: './src/sagemaker/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sagemaker/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sagemaker/hooks/angular-query.ts' },
  docs: {
    output: './src/sagemaker/api.md',
    curl: true,
    baseUrl: 'https://sagemaker.us-east-1.amazonaws.com',
  },
})
