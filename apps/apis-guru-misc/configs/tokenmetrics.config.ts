import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/tokenmetrics.com/1.0.0/openapi.yaml',
  output: './src/tokenmetrics/routes.ts',
  template: {},
  type: { output: './src/tokenmetrics/types.ts' },
  client: { output: './src/tokenmetrics/client.ts', baseUrl: '/' },
  rpc: { output: './src/tokenmetrics/rpc.ts', parseResponse: true },
  swr: { output: './src/tokenmetrics/hooks/swr.ts' },
  'tanstack-query': { output: './src/tokenmetrics/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/tokenmetrics/hooks/preact-query.ts' },
  'solid-query': { output: './src/tokenmetrics/hooks/solid-query.ts' },
  'vue-query': { output: './src/tokenmetrics/hooks/vue-query.ts' },
  'svelte-query': { output: './src/tokenmetrics/hooks/svelte-query.ts' },
  'angular-query': { output: './src/tokenmetrics/hooks/angular-query.ts' },
  docs: {
    output: './src/tokenmetrics/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
