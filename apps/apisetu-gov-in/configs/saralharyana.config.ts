import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/saralharyana/3.0.0/openapi.yaml',
  output: './src/saralharyana/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/saralharyana/types.ts' },
  client: { output: './src/saralharyana/client.ts', baseUrl: '/' },
  rpc: { output: './src/saralharyana/rpc.ts', parseResponse: true },
  swr: { output: './src/saralharyana/hooks/swr.ts' },
  'tanstack-query': { output: './src/saralharyana/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/saralharyana/hooks/preact-query.ts' },
  'solid-query': { output: './src/saralharyana/hooks/solid-query.ts' },
  'vue-query': { output: './src/saralharyana/hooks/vue-query.ts' },
  'svelte-query': { output: './src/saralharyana/hooks/svelte-query.ts' },
  'angular-query': { output: './src/saralharyana/hooks/angular-query.ts' },
  docs: {
    output: './src/saralharyana/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
