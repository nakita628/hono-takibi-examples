import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/prod_tt_sasportal/v1alpha1/openapi.yaml',
  output: './src/prod-tt-sasportal/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/prod-tt-sasportal/types.ts' },
  client: { output: './src/prod-tt-sasportal/client.ts', baseUrl: '/' },
  rpc: { output: './src/prod-tt-sasportal/rpc.ts', parseResponse: true },
  swr: { output: './src/prod-tt-sasportal/hooks/swr.ts' },
  'tanstack-query': { output: './src/prod-tt-sasportal/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/prod-tt-sasportal/hooks/preact-query.ts' },
  'solid-query': { output: './src/prod-tt-sasportal/hooks/solid-query.ts' },
  'vue-query': { output: './src/prod-tt-sasportal/hooks/vue-query.ts' },
  'svelte-query': { output: './src/prod-tt-sasportal/hooks/svelte-query.ts' },
  'angular-query': { output: './src/prod-tt-sasportal/hooks/angular-query.ts' },
  docs: {
    output: './src/prod-tt-sasportal/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
