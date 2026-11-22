import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/elasticloadbalancingv2/2015-12-01/openapi.yaml',
  output: './src/elasticloadbalancingv2/routes.ts',
  template: {},
  type: { output: './src/elasticloadbalancingv2/types.ts' },
  client: { output: './src/elasticloadbalancingv2/client.ts', baseUrl: '/' },
  rpc: { output: './src/elasticloadbalancingv2/rpc.ts', parseResponse: true },
  swr: { output: './src/elasticloadbalancingv2/hooks/swr.ts' },
  'tanstack-query': { output: './src/elasticloadbalancingv2/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/elasticloadbalancingv2/hooks/preact-query.ts' },
  'solid-query': { output: './src/elasticloadbalancingv2/hooks/solid-query.ts' },
  'vue-query': { output: './src/elasticloadbalancingv2/hooks/vue-query.ts' },
  'svelte-query': { output: './src/elasticloadbalancingv2/hooks/svelte-query.ts' },
  'angular-query': { output: './src/elasticloadbalancingv2/hooks/angular-query.ts' },
  docs: {
    output: './src/elasticloadbalancingv2/api.md',
    curl: true,
    baseUrl: 'https://elasticloadbalancingv2.us-east-1.amazonaws.com',
  },
})
