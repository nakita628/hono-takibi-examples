import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/snowball/2016-06-30/openapi.yaml',
  output: './src/snowball/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/snowball/types.ts' },
  client: { output: './src/snowball/client.ts', baseUrl: '/' },
  rpc: { output: './src/snowball/rpc.ts', parseResponse: true },
  swr: { output: './src/snowball/hooks/swr.ts' },
  'tanstack-query': { output: './src/snowball/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/snowball/hooks/preact-query.ts' },
  'solid-query': { output: './src/snowball/hooks/solid-query.ts' },
  'vue-query': { output: './src/snowball/hooks/vue-query.ts' },
  'svelte-query': { output: './src/snowball/hooks/svelte-query.ts' },
  'angular-query': { output: './src/snowball/hooks/angular-query.ts' },
  docs: {
    output: './src/snowball/api.md',
    curl: true,
    baseUrl: 'https://snowball.us-east-1.amazonaws.com',
  },
})
