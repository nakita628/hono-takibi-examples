import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/support/2013-04-15/openapi.yaml',
  output: './src/support/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/support/types.ts' },
  client: { output: './src/support/client.ts', baseUrl: '/' },
  rpc: { output: './src/support/rpc.ts', parseResponse: true },
  swr: { output: './src/support/hooks/swr.ts' },
  'tanstack-query': { output: './src/support/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/support/hooks/preact-query.ts' },
  'solid-query': { output: './src/support/hooks/solid-query.ts' },
  'vue-query': { output: './src/support/hooks/vue-query.ts' },
  'svelte-query': { output: './src/support/hooks/svelte-query.ts' },
  'angular-query': { output: './src/support/hooks/angular-query.ts' },
  docs: {
    output: './src/support/api.md',
    curl: true,
    baseUrl: 'https://support.us-east-1.amazonaws.com',
  },
})
