import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/runtime.sagemaker/2017-05-13/openapi.yaml',
  output: './src/runtime-sagemaker/routes.ts',
  template: {},
  type: { output: './src/runtime-sagemaker/types.ts' },
  client: { output: './src/runtime-sagemaker/client.ts', baseUrl: '/' },
  rpc: { output: './src/runtime-sagemaker/rpc.ts', parseResponse: true },
  swr: { output: './src/runtime-sagemaker/hooks/swr.ts' },
  'tanstack-query': { output: './src/runtime-sagemaker/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/runtime-sagemaker/hooks/preact-query.ts' },
  'solid-query': { output: './src/runtime-sagemaker/hooks/solid-query.ts' },
  'vue-query': { output: './src/runtime-sagemaker/hooks/vue-query.ts' },
  'svelte-query': { output: './src/runtime-sagemaker/hooks/svelte-query.ts' },
  'angular-query': { output: './src/runtime-sagemaker/hooks/angular-query.ts' },
  docs: {
    output: './src/runtime-sagemaker/api.md',
    curl: true,
    baseUrl: 'https://runtime-sagemaker.us-east-1.amazonaws.com',
  },
})
