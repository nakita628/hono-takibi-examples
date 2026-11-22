import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/phedharyana/3.0.0/openapi.yaml',
  output: './src/phedharyana/routes.ts',
  template: {},
  type: { output: './src/phedharyana/types.ts' },
  client: { output: './src/phedharyana/client.ts', baseUrl: '/' },
  rpc: { output: './src/phedharyana/rpc.ts', parseResponse: true },
  swr: { output: './src/phedharyana/hooks/swr.ts' },
  'tanstack-query': { output: './src/phedharyana/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/phedharyana/hooks/preact-query.ts' },
  'solid-query': { output: './src/phedharyana/hooks/solid-query.ts' },
  'vue-query': { output: './src/phedharyana/hooks/vue-query.ts' },
  'svelte-query': { output: './src/phedharyana/hooks/svelte-query.ts' },
  'angular-query': { output: './src/phedharyana/hooks/angular-query.ts' },
  docs: {
    output: './src/phedharyana/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
