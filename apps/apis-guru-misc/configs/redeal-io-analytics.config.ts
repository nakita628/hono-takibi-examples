import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/redeal.io/analytics/1.0.0/openapi.yaml',
  output: './src/redeal-io-analytics/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/redeal-io-analytics/types.ts' },
  client: { output: './src/redeal-io-analytics/client.ts', baseUrl: '/' },
  rpc: { output: './src/redeal-io-analytics/rpc.ts', parseResponse: true },
  swr: { output: './src/redeal-io-analytics/hooks/swr.ts' },
  'tanstack-query': { output: './src/redeal-io-analytics/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/redeal-io-analytics/hooks/preact-query.ts' },
  'solid-query': { output: './src/redeal-io-analytics/hooks/solid-query.ts' },
  'vue-query': { output: './src/redeal-io-analytics/hooks/vue-query.ts' },
  'svelte-query': { output: './src/redeal-io-analytics/hooks/svelte-query.ts' },
  'angular-query': { output: './src/redeal-io-analytics/hooks/angular-query.ts' },
  docs: {
    output: './src/redeal-io-analytics/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
