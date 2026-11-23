import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/kubernetes/kubernetes/master/api/openapi-spec/v3/apis__node.k8s.io__v1_openapi.json',
  output: './src/apis__node.k8s.io__v1/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/apis__node.k8s.io__v1/types.ts' },
  client: { output: './src/apis__node.k8s.io__v1/client.ts', baseUrl: '/' },
  rpc: { output: './src/apis__node.k8s.io__v1/rpc.ts', parseResponse: true },
  swr: { output: './src/apis__node.k8s.io__v1/hooks/swr.ts' },
  'tanstack-query': { output: './src/apis__node.k8s.io__v1/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/apis__node.k8s.io__v1/hooks/preact-query.ts' },
  'solid-query': { output: './src/apis__node.k8s.io__v1/hooks/solid-query.ts' },
  'vue-query': { output: './src/apis__node.k8s.io__v1/hooks/vue-query.ts' },
  'svelte-query': { output: './src/apis__node.k8s.io__v1/hooks/svelte-query.ts' },
  'angular-query': { output: './src/apis__node.k8s.io__v1/hooks/angular-query.ts' },
  docs: {
    output: './src/apis__node.k8s.io__v1/api.md',
    curl: true,
    baseUrl: 'https://kubernetes.default.svc',
  },
})
