import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transporthr/3.0.0/openapi.yaml',
  output: './src/transporthr/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/transporthr/types.ts' },
  client: { output: './src/transporthr/client.ts', baseUrl: '/' },
  rpc: { output: './src/transporthr/rpc.ts', parseResponse: true },
  swr: { output: './src/transporthr/hooks/swr.ts' },
  'tanstack-query': { output: './src/transporthr/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transporthr/hooks/preact-query.ts' },
  'solid-query': { output: './src/transporthr/hooks/solid-query.ts' },
  'vue-query': { output: './src/transporthr/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transporthr/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transporthr/hooks/angular-query.ts' },
  docs: {
    output: './src/transporthr/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
