import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/sagemaker-edge/2020-09-23/openapi.yaml',
  output: './src/sagemaker-edge/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/sagemaker-edge/types.ts' },
  client: { output: './src/sagemaker-edge/client.ts', baseUrl: '/' },
  rpc: { output: './src/sagemaker-edge/rpc.ts', parseResponse: true },
  swr: { output: './src/sagemaker-edge/hooks/swr.ts' },
  'tanstack-query': { output: './src/sagemaker-edge/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sagemaker-edge/hooks/preact-query.ts' },
  'solid-query': { output: './src/sagemaker-edge/hooks/solid-query.ts' },
  'vue-query': { output: './src/sagemaker-edge/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sagemaker-edge/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sagemaker-edge/hooks/angular-query.ts' },
  docs: {
    output: './src/sagemaker-edge/api.md',
    curl: true,
    baseUrl: 'https://sagemaker-edge.us-east-1.amazonaws.com',
  },
})
