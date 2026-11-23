import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/sagemaker-a2i-runtime/2019-11-07/openapi.yaml',
  output: './src/sagemaker-a2i-runtime/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/sagemaker-a2i-runtime/types.ts' },
  client: { output: './src/sagemaker-a2i-runtime/client.ts', baseUrl: '/' },
  rpc: { output: './src/sagemaker-a2i-runtime/rpc.ts', parseResponse: true },
  swr: { output: './src/sagemaker-a2i-runtime/hooks/swr.ts' },
  'tanstack-query': { output: './src/sagemaker-a2i-runtime/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sagemaker-a2i-runtime/hooks/preact-query.ts' },
  'solid-query': { output: './src/sagemaker-a2i-runtime/hooks/solid-query.ts' },
  'vue-query': { output: './src/sagemaker-a2i-runtime/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sagemaker-a2i-runtime/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sagemaker-a2i-runtime/hooks/angular-query.ts' },
  docs: {
    output: './src/sagemaker-a2i-runtime/api.md',
    curl: true,
    baseUrl: 'https://sagemaker-a2i-runtime.us-east-1.amazonaws.com',
  },
})
