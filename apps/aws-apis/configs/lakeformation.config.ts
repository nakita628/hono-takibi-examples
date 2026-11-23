import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/lakeformation/2017-03-31/openapi.yaml',
  output: './src/lakeformation/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/lakeformation/types.ts' },
  client: { output: './src/lakeformation/client.ts', baseUrl: '/' },
  rpc: { output: './src/lakeformation/rpc.ts', parseResponse: true },
  swr: { output: './src/lakeformation/hooks/swr.ts' },
  'tanstack-query': { output: './src/lakeformation/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/lakeformation/hooks/preact-query.ts' },
  'solid-query': { output: './src/lakeformation/hooks/solid-query.ts' },
  'vue-query': { output: './src/lakeformation/hooks/vue-query.ts' },
  'svelte-query': { output: './src/lakeformation/hooks/svelte-query.ts' },
  'angular-query': { output: './src/lakeformation/hooks/angular-query.ts' },
  docs: {
    output: './src/lakeformation/api.md',
    curl: true,
    baseUrl: 'https://lakeformation.us-east-1.amazonaws.com',
  },
})
