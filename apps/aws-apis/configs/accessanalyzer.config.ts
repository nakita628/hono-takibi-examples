import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/accessanalyzer/2019-11-01/openapi.yaml',
  output: './src/accessanalyzer/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/accessanalyzer/types.ts' },
  client: { output: './src/accessanalyzer/client.ts', baseUrl: '/' },
  rpc: { output: './src/accessanalyzer/rpc.ts', parseResponse: true },
  swr: { output: './src/accessanalyzer/hooks/swr.ts' },
  'tanstack-query': { output: './src/accessanalyzer/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/accessanalyzer/hooks/preact-query.ts' },
  'solid-query': { output: './src/accessanalyzer/hooks/solid-query.ts' },
  'vue-query': { output: './src/accessanalyzer/hooks/vue-query.ts' },
  'svelte-query': { output: './src/accessanalyzer/hooks/svelte-query.ts' },
  'angular-query': { output: './src/accessanalyzer/hooks/angular-query.ts' },
  docs: {
    output: './src/accessanalyzer/api.md',
    curl: true,
    baseUrl: 'https://accessanalyzer.us-east-1.amazonaws.com',
  },
})
