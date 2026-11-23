import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/pblabour/3.0.0/openapi.yaml',
  output: './src/pblabour/routes.ts',
  template: {},
  type: { output: './src/pblabour/types.ts' },
  client: { output: './src/pblabour/client.ts', baseUrl: '/' },
  rpc: { output: './src/pblabour/rpc.ts', parseResponse: true },
  swr: { output: './src/pblabour/hooks/swr.ts' },
  'tanstack-query': { output: './src/pblabour/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/pblabour/hooks/preact-query.ts' },
  'solid-query': { output: './src/pblabour/hooks/solid-query.ts' },
  'vue-query': { output: './src/pblabour/hooks/vue-query.ts' },
  'svelte-query': { output: './src/pblabour/hooks/svelte-query.ts' },
  'angular-query': { output: './src/pblabour/hooks/angular-query.ts' },
  docs: {
    output: './src/pblabour/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
