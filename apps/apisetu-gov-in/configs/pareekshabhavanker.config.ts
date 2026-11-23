import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/pareekshabhavanker/3.0.0/openapi.yaml',
  output: './src/pareekshabhavanker/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/pareekshabhavanker/types.ts' },
  client: { output: './src/pareekshabhavanker/client.ts', baseUrl: '/' },
  rpc: { output: './src/pareekshabhavanker/rpc.ts', parseResponse: true },
  swr: { output: './src/pareekshabhavanker/hooks/swr.ts' },
  'tanstack-query': { output: './src/pareekshabhavanker/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/pareekshabhavanker/hooks/preact-query.ts' },
  'solid-query': { output: './src/pareekshabhavanker/hooks/solid-query.ts' },
  'vue-query': { output: './src/pareekshabhavanker/hooks/vue-query.ts' },
  'svelte-query': { output: './src/pareekshabhavanker/hooks/svelte-query.ts' },
  'angular-query': { output: './src/pareekshabhavanker/hooks/angular-query.ts' },
  docs: {
    output: './src/pareekshabhavanker/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
