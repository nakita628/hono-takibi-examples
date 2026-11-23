import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/csc/3.0.0/openapi.yaml',
  output: './src/csc/routes.ts',
  template: {},
  type: { output: './src/csc/types.ts' },
  client: { output: './src/csc/client.ts', baseUrl: '/' },
  rpc: { output: './src/csc/rpc.ts', parseResponse: true },
  swr: { output: './src/csc/hooks/swr.ts' },
  'tanstack-query': { output: './src/csc/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/csc/hooks/preact-query.ts' },
  'solid-query': { output: './src/csc/hooks/solid-query.ts' },
  'vue-query': { output: './src/csc/hooks/vue-query.ts' },
  'svelte-query': { output: './src/csc/hooks/svelte-query.ts' },
  'angular-query': { output: './src/csc/hooks/angular-query.ts' },
  docs: {
    output: './src/csc/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
