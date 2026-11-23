import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/policysimulator/v1beta/openapi.yaml',
  output: './src/policysimulator/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/policysimulator/types.ts' },
  client: { output: './src/policysimulator/client.ts', baseUrl: '/' },
  rpc: { output: './src/policysimulator/rpc.ts', parseResponse: true },
  swr: { output: './src/policysimulator/hooks/swr.ts' },
  'tanstack-query': { output: './src/policysimulator/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/policysimulator/hooks/preact-query.ts' },
  'solid-query': { output: './src/policysimulator/hooks/solid-query.ts' },
  'vue-query': { output: './src/policysimulator/hooks/vue-query.ts' },
  'svelte-query': { output: './src/policysimulator/hooks/svelte-query.ts' },
  'angular-query': { output: './src/policysimulator/hooks/angular-query.ts' },
  docs: {
    output: './src/policysimulator/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
