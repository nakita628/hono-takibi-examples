import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/commentanalyzer/v1alpha1/openapi.yaml',
  output: './src/commentanalyzer/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/commentanalyzer/types.ts' },
  client: { output: './src/commentanalyzer/client.ts', baseUrl: '/' },
  rpc: { output: './src/commentanalyzer/rpc.ts', parseResponse: true },
  swr: { output: './src/commentanalyzer/hooks/swr.ts' },
  'tanstack-query': { output: './src/commentanalyzer/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/commentanalyzer/hooks/preact-query.ts' },
  'solid-query': { output: './src/commentanalyzer/hooks/solid-query.ts' },
  'vue-query': { output: './src/commentanalyzer/hooks/vue-query.ts' },
  'svelte-query': { output: './src/commentanalyzer/hooks/svelte-query.ts' },
  'angular-query': { output: './src/commentanalyzer/hooks/angular-query.ts' },
  docs: {
    output: './src/commentanalyzer/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
