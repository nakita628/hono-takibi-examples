import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/analyticshub/v1/openapi.yaml',
  output: './src/analyticshub/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/analyticshub/types.ts' },
  client: { output: './src/analyticshub/client.ts', baseUrl: '/' },
  rpc: { output: './src/analyticshub/rpc.ts', parseResponse: true },
  swr: { output: './src/analyticshub/hooks/swr.ts' },
  'tanstack-query': { output: './src/analyticshub/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/analyticshub/hooks/preact-query.ts' },
  'solid-query': { output: './src/analyticshub/hooks/solid-query.ts' },
  'vue-query': { output: './src/analyticshub/hooks/vue-query.ts' },
  'svelte-query': { output: './src/analyticshub/hooks/svelte-query.ts' },
  'angular-query': { output: './src/analyticshub/hooks/angular-query.ts' },
  docs: {
    output: './src/analyticshub/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
