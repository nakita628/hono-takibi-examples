import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/identitystore/2020-06-15/openapi.yaml',
  output: './src/identitystore/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/identitystore/types.ts' },
  client: { output: './src/identitystore/client.ts', baseUrl: '/' },
  rpc: { output: './src/identitystore/rpc.ts', parseResponse: true },
  swr: { output: './src/identitystore/hooks/swr.ts' },
  'tanstack-query': { output: './src/identitystore/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/identitystore/hooks/preact-query.ts' },
  'solid-query': { output: './src/identitystore/hooks/solid-query.ts' },
  'vue-query': { output: './src/identitystore/hooks/vue-query.ts' },
  'svelte-query': { output: './src/identitystore/hooks/svelte-query.ts' },
  'angular-query': { output: './src/identitystore/hooks/angular-query.ts' },
  docs: {
    output: './src/identitystore/api.md',
    curl: true,
    baseUrl: 'https://identitystore.us-east-1.amazonaws.com',
  },
})
