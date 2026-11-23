import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/statisticsrajasthan/3.0.0/openapi.yaml',
  output: './src/statisticsrajasthan/routes.ts',
  template: {},
  type: { output: './src/statisticsrajasthan/types.ts' },
  client: { output: './src/statisticsrajasthan/client.ts', baseUrl: '/' },
  rpc: { output: './src/statisticsrajasthan/rpc.ts', parseResponse: true },
  swr: { output: './src/statisticsrajasthan/hooks/swr.ts' },
  'tanstack-query': { output: './src/statisticsrajasthan/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/statisticsrajasthan/hooks/preact-query.ts' },
  'solid-query': { output: './src/statisticsrajasthan/hooks/solid-query.ts' },
  'vue-query': { output: './src/statisticsrajasthan/hooks/vue-query.ts' },
  'svelte-query': { output: './src/statisticsrajasthan/hooks/svelte-query.ts' },
  'angular-query': { output: './src/statisticsrajasthan/hooks/angular-query.ts' },
  docs: {
    output: './src/statisticsrajasthan/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
