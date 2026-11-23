import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/shield/2016-06-02/openapi.yaml',
  output: './src/shield/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/shield/types.ts' },
  client: { output: './src/shield/client.ts', baseUrl: '/' },
  rpc: { output: './src/shield/rpc.ts', parseResponse: true },
  swr: { output: './src/shield/hooks/swr.ts' },
  'tanstack-query': { output: './src/shield/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/shield/hooks/preact-query.ts' },
  'solid-query': { output: './src/shield/hooks/solid-query.ts' },
  'vue-query': { output: './src/shield/hooks/vue-query.ts' },
  'svelte-query': { output: './src/shield/hooks/svelte-query.ts' },
  'angular-query': { output: './src/shield/hooks/angular-query.ts' },
  docs: {
    output: './src/shield/api.md',
    curl: true,
    baseUrl: 'https://shield.us-east-1.amazonaws.com',
  },
})
