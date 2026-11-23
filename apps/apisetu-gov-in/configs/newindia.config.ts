import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/newindia/3.0.0/openapi.yaml',
  output: './src/newindia/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/newindia/types.ts' },
  client: { output: './src/newindia/client.ts', baseUrl: '/' },
  rpc: { output: './src/newindia/rpc.ts', parseResponse: true },
  swr: { output: './src/newindia/hooks/swr.ts' },
  'tanstack-query': { output: './src/newindia/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/newindia/hooks/preact-query.ts' },
  'solid-query': { output: './src/newindia/hooks/solid-query.ts' },
  'vue-query': { output: './src/newindia/hooks/vue-query.ts' },
  'svelte-query': { output: './src/newindia/hooks/svelte-query.ts' },
  'angular-query': { output: './src/newindia/hooks/angular-query.ts' },
  docs: {
    output: './src/newindia/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
