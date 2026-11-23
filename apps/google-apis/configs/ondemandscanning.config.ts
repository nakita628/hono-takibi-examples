import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/ondemandscanning/v1beta1/openapi.yaml',
  output: './src/ondemandscanning/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/ondemandscanning/types.ts' },
  client: { output: './src/ondemandscanning/client.ts', baseUrl: '/' },
  rpc: { output: './src/ondemandscanning/rpc.ts', parseResponse: true },
  swr: { output: './src/ondemandscanning/hooks/swr.ts' },
  'tanstack-query': { output: './src/ondemandscanning/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ondemandscanning/hooks/preact-query.ts' },
  'solid-query': { output: './src/ondemandscanning/hooks/solid-query.ts' },
  'vue-query': { output: './src/ondemandscanning/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ondemandscanning/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ondemandscanning/hooks/angular-query.ts' },
  docs: {
    output: './src/ondemandscanning/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
