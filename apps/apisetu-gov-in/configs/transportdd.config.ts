import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportdd/3.0.0/openapi.yaml',
  output: './src/transportdd/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/transportdd/types.ts' },
  client: { output: './src/transportdd/client.ts', baseUrl: '/' },
  rpc: { output: './src/transportdd/rpc.ts', parseResponse: true },
  swr: { output: './src/transportdd/hooks/swr.ts' },
  'tanstack-query': { output: './src/transportdd/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transportdd/hooks/preact-query.ts' },
  'solid-query': { output: './src/transportdd/hooks/solid-query.ts' },
  'vue-query': { output: './src/transportdd/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transportdd/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transportdd/hooks/angular-query.ts' },
  docs: {
    output: './src/transportdd/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
