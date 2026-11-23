import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/sebaonline/3.0.0/openapi.yaml',
  output: './src/sebaonline/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/sebaonline/types.ts' },
  client: { output: './src/sebaonline/client.ts', baseUrl: '/' },
  rpc: { output: './src/sebaonline/rpc.ts', parseResponse: true },
  swr: { output: './src/sebaonline/hooks/swr.ts' },
  'tanstack-query': { output: './src/sebaonline/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sebaonline/hooks/preact-query.ts' },
  'solid-query': { output: './src/sebaonline/hooks/solid-query.ts' },
  'vue-query': { output: './src/sebaonline/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sebaonline/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sebaonline/hooks/angular-query.ts' },
  docs: {
    output: './src/sebaonline/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
