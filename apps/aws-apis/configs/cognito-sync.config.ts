import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/cognito-sync/2014-06-30/openapi.yaml',
  output: './src/cognito-sync/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/cognito-sync/types.ts' },
  client: { output: './src/cognito-sync/client.ts', baseUrl: '/' },
  rpc: { output: './src/cognito-sync/rpc.ts', parseResponse: true },
  swr: { output: './src/cognito-sync/hooks/swr.ts' },
  'tanstack-query': { output: './src/cognito-sync/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cognito-sync/hooks/preact-query.ts' },
  'solid-query': { output: './src/cognito-sync/hooks/solid-query.ts' },
  'vue-query': { output: './src/cognito-sync/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cognito-sync/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cognito-sync/hooks/angular-query.ts' },
  docs: {
    output: './src/cognito-sync/api.md',
    curl: true,
    baseUrl: 'https://cognito-sync.us-east-1.amazonaws.com',
  },
})
