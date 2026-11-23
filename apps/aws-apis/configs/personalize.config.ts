import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/personalize/2018-05-22/openapi.yaml',
  output: './src/personalize/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/personalize/types.ts' },
  client: { output: './src/personalize/client.ts', baseUrl: '/' },
  rpc: { output: './src/personalize/rpc.ts', parseResponse: true },
  swr: { output: './src/personalize/hooks/swr.ts' },
  'tanstack-query': { output: './src/personalize/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/personalize/hooks/preact-query.ts' },
  'solid-query': { output: './src/personalize/hooks/solid-query.ts' },
  'vue-query': { output: './src/personalize/hooks/vue-query.ts' },
  'svelte-query': { output: './src/personalize/hooks/svelte-query.ts' },
  'angular-query': { output: './src/personalize/hooks/angular-query.ts' },
  docs: {
    output: './src/personalize/api.md',
    curl: true,
    baseUrl: 'https://personalize.us-east-1.amazonaws.com',
  },
})
