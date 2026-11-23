import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/discoveryengine/v1beta/openapi.yaml',
  output: './src/discoveryengine/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/discoveryengine/types.ts' },
  client: { output: './src/discoveryengine/client.ts', baseUrl: '/' },
  rpc: { output: './src/discoveryengine/rpc.ts', parseResponse: true },
  swr: { output: './src/discoveryengine/hooks/swr.ts' },
  'tanstack-query': { output: './src/discoveryengine/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/discoveryengine/hooks/preact-query.ts' },
  'solid-query': { output: './src/discoveryengine/hooks/solid-query.ts' },
  'vue-query': { output: './src/discoveryengine/hooks/vue-query.ts' },
  'svelte-query': { output: './src/discoveryengine/hooks/svelte-query.ts' },
  'angular-query': { output: './src/discoveryengine/hooks/angular-query.ts' },
  docs: {
    output: './src/discoveryengine/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
