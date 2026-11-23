import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportgj/3.0.0/openapi.yaml',
  output: './src/transportgj/routes.ts',
  template: {},
  type: { output: './src/transportgj/types.ts' },
  client: { output: './src/transportgj/client.ts', baseUrl: '/' },
  rpc: { output: './src/transportgj/rpc.ts', parseResponse: true },
  swr: { output: './src/transportgj/hooks/swr.ts' },
  'tanstack-query': { output: './src/transportgj/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transportgj/hooks/preact-query.ts' },
  'solid-query': { output: './src/transportgj/hooks/solid-query.ts' },
  'vue-query': { output: './src/transportgj/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transportgj/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transportgj/hooks/angular-query.ts' },
  docs: {
    output: './src/transportgj/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
