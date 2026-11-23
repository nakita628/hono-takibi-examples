import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transporthp/3.0.0/openapi.yaml',
  output: './src/transporthp/routes.ts',
  template: {},
  type: { output: './src/transporthp/types.ts' },
  client: { output: './src/transporthp/client.ts', baseUrl: '/' },
  rpc: { output: './src/transporthp/rpc.ts', parseResponse: true },
  swr: { output: './src/transporthp/hooks/swr.ts' },
  'tanstack-query': { output: './src/transporthp/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transporthp/hooks/preact-query.ts' },
  'solid-query': { output: './src/transporthp/hooks/solid-query.ts' },
  'vue-query': { output: './src/transporthp/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transporthp/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transporthp/hooks/angular-query.ts' },
  docs: {
    output: './src/transporthp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
