import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/kubernetes/kubernetes/master/api/openapi-spec/v3/apis__autoscaling__v2_openapi.json',
  output: './src/apis__autoscaling__v2/routes.ts',
  template: {},
  type: { output: './src/apis__autoscaling__v2/types.ts' },
  client: { output: './src/apis__autoscaling__v2/client.ts', baseUrl: '/' },
  rpc: { output: './src/apis__autoscaling__v2/rpc.ts', parseResponse: true },
  swr: { output: './src/apis__autoscaling__v2/hooks/swr.ts' },
  'tanstack-query': { output: './src/apis__autoscaling__v2/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/apis__autoscaling__v2/hooks/preact-query.ts' },
  'solid-query': { output: './src/apis__autoscaling__v2/hooks/solid-query.ts' },
  'vue-query': { output: './src/apis__autoscaling__v2/hooks/vue-query.ts' },
  'svelte-query': { output: './src/apis__autoscaling__v2/hooks/svelte-query.ts' },
  'angular-query': { output: './src/apis__autoscaling__v2/hooks/angular-query.ts' },
  docs: {
    output: './src/apis__autoscaling__v2/api.md',
    curl: true,
    baseUrl: 'https://kubernetes.default.svc',
  },
})
