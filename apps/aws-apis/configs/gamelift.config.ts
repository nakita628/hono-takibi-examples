import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/gamelift/2015-10-01/openapi.yaml',
  output: './src/gamelift/routes.ts',
  template: {},
  type: { output: './src/gamelift/types.ts' },
  client: { output: './src/gamelift/client.ts', baseUrl: '/' },
  rpc: { output: './src/gamelift/rpc.ts', parseResponse: true },
  swr: { output: './src/gamelift/hooks/swr.ts' },
  'tanstack-query': { output: './src/gamelift/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/gamelift/hooks/preact-query.ts' },
  'solid-query': { output: './src/gamelift/hooks/solid-query.ts' },
  'vue-query': { output: './src/gamelift/hooks/vue-query.ts' },
  'svelte-query': { output: './src/gamelift/hooks/svelte-query.ts' },
  'angular-query': { output: './src/gamelift/hooks/angular-query.ts' },
  docs: {
    output: './src/gamelift/api.md',
    curl: true,
    baseUrl: 'https://gamelift.us-east-1.amazonaws.com',
  },
})
