import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/pan/3.0.0/openapi.yaml',
  output: './src/pan/routes.ts',
  template: {},
  type: { output: './src/pan/types.ts' },
  client: { output: './src/pan/client.ts', baseUrl: '/' },
  rpc: { output: './src/pan/rpc.ts', parseResponse: true },
  swr: { output: './src/pan/hooks/swr.ts' },
  'tanstack-query': { output: './src/pan/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/pan/hooks/preact-query.ts' },
  'solid-query': { output: './src/pan/hooks/solid-query.ts' },
  'vue-query': { output: './src/pan/hooks/vue-query.ts' },
  'svelte-query': { output: './src/pan/hooks/svelte-query.ts' },
  'angular-query': { output: './src/pan/hooks/angular-query.ts' },
  docs: {
    output: './src/pan/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
