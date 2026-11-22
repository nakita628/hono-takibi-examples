import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/analytics/v3/openapi.yaml',
  output: './src/analytics/routes.ts',
  template: {},
  type: { output: './src/analytics/types.ts' },
  client: { output: './src/analytics/client.ts', baseUrl: '/' },
  rpc: { output: './src/analytics/rpc.ts', parseResponse: true },
  swr: { output: './src/analytics/hooks/swr.ts' },
  'tanstack-query': { output: './src/analytics/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/analytics/hooks/preact-query.ts' },
  'solid-query': { output: './src/analytics/hooks/solid-query.ts' },
  'vue-query': { output: './src/analytics/hooks/vue-query.ts' },
  'svelte-query': { output: './src/analytics/hooks/svelte-query.ts' },
  'angular-query': { output: './src/analytics/hooks/angular-query.ts' },
  docs: {
    output: './src/analytics/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
