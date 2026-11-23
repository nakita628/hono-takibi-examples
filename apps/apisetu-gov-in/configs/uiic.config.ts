import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/uiic/3.0.0/openapi.yaml',
  output: './src/uiic/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/uiic/types.ts' },
  client: { output: './src/uiic/client.ts', baseUrl: '/' },
  rpc: { output: './src/uiic/rpc.ts', parseResponse: true },
  swr: { output: './src/uiic/hooks/swr.ts' },
  'tanstack-query': { output: './src/uiic/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/uiic/hooks/preact-query.ts' },
  'solid-query': { output: './src/uiic/hooks/solid-query.ts' },
  'vue-query': { output: './src/uiic/hooks/vue-query.ts' },
  'svelte-query': { output: './src/uiic/hooks/svelte-query.ts' },
  'angular-query': { output: './src/uiic/hooks/angular-query.ts' },
  docs: {
    output: './src/uiic/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
