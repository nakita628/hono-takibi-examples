import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/sagemaker-featurestore-runtime/2020-07-01/openapi.yaml',
  output: './src/sagemaker-featurestore-runtime/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/sagemaker-featurestore-runtime/types.ts' },
  client: { output: './src/sagemaker-featurestore-runtime/client.ts', baseUrl: '/' },
  rpc: { output: './src/sagemaker-featurestore-runtime/rpc.ts', parseResponse: true },
  swr: { output: './src/sagemaker-featurestore-runtime/hooks/swr.ts' },
  'tanstack-query': { output: './src/sagemaker-featurestore-runtime/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sagemaker-featurestore-runtime/hooks/preact-query.ts' },
  'solid-query': { output: './src/sagemaker-featurestore-runtime/hooks/solid-query.ts' },
  'vue-query': { output: './src/sagemaker-featurestore-runtime/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sagemaker-featurestore-runtime/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sagemaker-featurestore-runtime/hooks/angular-query.ts' },
  docs: {
    output: './src/sagemaker-featurestore-runtime/api.md',
    curl: true,
    baseUrl: 'https://sagemaker-featurestore-runtime.us-east-1.amazonaws.com',
  },
})
