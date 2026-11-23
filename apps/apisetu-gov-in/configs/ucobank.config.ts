import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/ucobank/3.0.0/openapi.yaml',
  output: './src/ucobank/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/ucobank/types.ts' },
  client: { output: './src/ucobank/client.ts', baseUrl: '/' },
  rpc: { output: './src/ucobank/rpc.ts', parseResponse: true },
  swr: { output: './src/ucobank/hooks/swr.ts' },
  'tanstack-query': { output: './src/ucobank/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ucobank/hooks/preact-query.ts' },
  'solid-query': { output: './src/ucobank/hooks/solid-query.ts' },
  'vue-query': { output: './src/ucobank/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ucobank/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ucobank/hooks/angular-query.ts' },
  docs: {
    output: './src/ucobank/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
