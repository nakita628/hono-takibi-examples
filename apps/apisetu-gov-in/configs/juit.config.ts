import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/juit/3.0.0/openapi.yaml',
  output: './src/juit/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/juit/types.ts' },
  client: { output: './src/juit/client.ts', baseUrl: '/' },
  rpc: { output: './src/juit/rpc.ts', parseResponse: true },
  swr: { output: './src/juit/hooks/swr.ts' },
  'tanstack-query': { output: './src/juit/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/juit/hooks/preact-query.ts' },
  'solid-query': { output: './src/juit/hooks/solid-query.ts' },
  'vue-query': { output: './src/juit/hooks/vue-query.ts' },
  'svelte-query': { output: './src/juit/hooks/svelte-query.ts' },
  'angular-query': { output: './src/juit/hooks/angular-query.ts' },
  docs: {
    output: './src/juit/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
