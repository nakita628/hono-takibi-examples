import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/outposts/2019-12-03/openapi.yaml',
  output: './src/outposts/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/outposts/types.ts' },
  client: { output: './src/outposts/client.ts', baseUrl: '/' },
  rpc: { output: './src/outposts/rpc.ts', parseResponse: true },
  swr: { output: './src/outposts/hooks/swr.ts' },
  'tanstack-query': { output: './src/outposts/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/outposts/hooks/preact-query.ts' },
  'solid-query': { output: './src/outposts/hooks/solid-query.ts' },
  'vue-query': { output: './src/outposts/hooks/vue-query.ts' },
  'svelte-query': { output: './src/outposts/hooks/svelte-query.ts' },
  'angular-query': { output: './src/outposts/hooks/angular-query.ts' },
  docs: {
    output: './src/outposts/api.md',
    curl: true,
    baseUrl: 'https://outposts.us-east-1.amazonaws.com',
  },
})
