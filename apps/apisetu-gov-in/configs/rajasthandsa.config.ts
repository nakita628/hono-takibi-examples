import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/rajasthandsa/3.0.0/openapi.yaml',
  output: './src/rajasthandsa/routes.ts',
  template: {},
  type: { output: './src/rajasthandsa/types.ts' },
  client: { output: './src/rajasthandsa/client.ts', baseUrl: '/' },
  rpc: { output: './src/rajasthandsa/rpc.ts', parseResponse: true },
  swr: { output: './src/rajasthandsa/hooks/swr.ts' },
  'tanstack-query': { output: './src/rajasthandsa/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/rajasthandsa/hooks/preact-query.ts' },
  'solid-query': { output: './src/rajasthandsa/hooks/solid-query.ts' },
  'vue-query': { output: './src/rajasthandsa/hooks/vue-query.ts' },
  'svelte-query': { output: './src/rajasthandsa/hooks/svelte-query.ts' },
  'angular-query': { output: './src/rajasthandsa/hooks/angular-query.ts' },
  docs: {
    output: './src/rajasthandsa/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
