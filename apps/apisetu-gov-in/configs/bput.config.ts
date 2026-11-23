import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/bput/3.0.0/openapi.yaml',
  output: './src/bput/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/bput/types.ts' },
  client: { output: './src/bput/client.ts', baseUrl: '/' },
  rpc: { output: './src/bput/rpc.ts', parseResponse: true },
  swr: { output: './src/bput/hooks/swr.ts' },
  'tanstack-query': { output: './src/bput/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/bput/hooks/preact-query.ts' },
  'solid-query': { output: './src/bput/hooks/solid-query.ts' },
  'vue-query': { output: './src/bput/hooks/vue-query.ts' },
  'svelte-query': { output: './src/bput/hooks/svelte-query.ts' },
  'angular-query': { output: './src/bput/hooks/angular-query.ts' },
  docs: {
    output: './src/bput/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
