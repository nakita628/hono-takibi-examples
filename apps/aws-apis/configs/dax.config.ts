import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/dax/2017-04-19/openapi.yaml',
  output: './src/dax/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/dax/types.ts' },
  client: { output: './src/dax/client.ts', baseUrl: '/' },
  rpc: { output: './src/dax/rpc.ts', parseResponse: true },
  swr: { output: './src/dax/hooks/swr.ts' },
  'tanstack-query': { output: './src/dax/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/dax/hooks/preact-query.ts' },
  'solid-query': { output: './src/dax/hooks/solid-query.ts' },
  'vue-query': { output: './src/dax/hooks/vue-query.ts' },
  'svelte-query': { output: './src/dax/hooks/svelte-query.ts' },
  'angular-query': { output: './src/dax/hooks/angular-query.ts' },
  docs: {
    output: './src/dax/api.md',
    curl: true,
    baseUrl: 'https://dax.us-east-1.amazonaws.com',
  },
})
