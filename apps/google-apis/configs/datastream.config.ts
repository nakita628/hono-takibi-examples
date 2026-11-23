import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/datastream/v1/openapi.yaml',
  output: './src/datastream/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/datastream/types.ts' },
  client: { output: './src/datastream/client.ts', baseUrl: '/' },
  rpc: { output: './src/datastream/rpc.ts', parseResponse: true },
  swr: { output: './src/datastream/hooks/swr.ts' },
  'tanstack-query': { output: './src/datastream/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/datastream/hooks/preact-query.ts' },
  'solid-query': { output: './src/datastream/hooks/solid-query.ts' },
  'vue-query': { output: './src/datastream/hooks/vue-query.ts' },
  'svelte-query': { output: './src/datastream/hooks/svelte-query.ts' },
  'angular-query': { output: './src/datastream/hooks/angular-query.ts' },
  docs: {
    output: './src/datastream/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
