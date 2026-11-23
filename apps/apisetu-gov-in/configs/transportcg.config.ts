import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportcg/3.0.0/openapi.yaml',
  output: './src/transportcg/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/transportcg/types.ts' },
  client: { output: './src/transportcg/client.ts', baseUrl: '/' },
  rpc: { output: './src/transportcg/rpc.ts', parseResponse: true },
  swr: { output: './src/transportcg/hooks/swr.ts' },
  'tanstack-query': { output: './src/transportcg/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transportcg/hooks/preact-query.ts' },
  'solid-query': { output: './src/transportcg/hooks/solid-query.ts' },
  'vue-query': { output: './src/transportcg/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transportcg/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transportcg/hooks/angular-query.ts' },
  docs: {
    output: './src/transportcg/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
