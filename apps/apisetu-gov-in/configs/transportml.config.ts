import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportml/3.0.0/openapi.yaml',
  output: './src/transportml/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/transportml/types.ts' },
  client: { output: './src/transportml/client.ts', baseUrl: '/' },
  rpc: { output: './src/transportml/rpc.ts', parseResponse: true },
  swr: { output: './src/transportml/hooks/swr.ts' },
  'tanstack-query': { output: './src/transportml/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transportml/hooks/preact-query.ts' },
  'solid-query': { output: './src/transportml/hooks/solid-query.ts' },
  'vue-query': { output: './src/transportml/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transportml/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transportml/hooks/angular-query.ts' },
  docs: {
    output: './src/transportml/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
