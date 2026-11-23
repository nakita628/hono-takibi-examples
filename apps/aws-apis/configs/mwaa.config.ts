import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/mwaa/2020-07-01/openapi.yaml',
  output: './src/mwaa/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/mwaa/types.ts' },
  client: { output: './src/mwaa/client.ts', baseUrl: '/' },
  rpc: { output: './src/mwaa/rpc.ts', parseResponse: true },
  swr: { output: './src/mwaa/hooks/swr.ts' },
  'tanstack-query': { output: './src/mwaa/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mwaa/hooks/preact-query.ts' },
  'solid-query': { output: './src/mwaa/hooks/solid-query.ts' },
  'vue-query': { output: './src/mwaa/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mwaa/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mwaa/hooks/angular-query.ts' },
  docs: {
    output: './src/mwaa/api.md',
    curl: true,
    baseUrl: 'https://mwaa.us-east-1.amazonaws.com',
  },
})
