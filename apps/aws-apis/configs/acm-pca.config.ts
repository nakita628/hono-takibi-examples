import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/acm-pca/2017-08-22/openapi.yaml',
  output: './src/acm-pca/routes.ts',
  template: {},
  type: { output: './src/acm-pca/types.ts' },
  client: { output: './src/acm-pca/client.ts', baseUrl: '/' },
  rpc: { output: './src/acm-pca/rpc.ts', parseResponse: true },
  swr: { output: './src/acm-pca/hooks/swr.ts' },
  'tanstack-query': { output: './src/acm-pca/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/acm-pca/hooks/preact-query.ts' },
  'solid-query': { output: './src/acm-pca/hooks/solid-query.ts' },
  'vue-query': { output: './src/acm-pca/hooks/vue-query.ts' },
  'svelte-query': { output: './src/acm-pca/hooks/svelte-query.ts' },
  'angular-query': { output: './src/acm-pca/hooks/angular-query.ts' },
  docs: {
    output: './src/acm-pca/api.md',
    curl: true,
    baseUrl: 'https://acm-pca.us-east-1.amazonaws.com',
  },
})
