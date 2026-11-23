import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/codestar/2017-04-19/openapi.yaml',
  output: './src/codestar/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/codestar/types.ts' },
  client: { output: './src/codestar/client.ts', baseUrl: '/' },
  rpc: { output: './src/codestar/rpc.ts', parseResponse: true },
  swr: { output: './src/codestar/hooks/swr.ts' },
  'tanstack-query': { output: './src/codestar/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/codestar/hooks/preact-query.ts' },
  'solid-query': { output: './src/codestar/hooks/solid-query.ts' },
  'vue-query': { output: './src/codestar/hooks/vue-query.ts' },
  'svelte-query': { output: './src/codestar/hooks/svelte-query.ts' },
  'angular-query': { output: './src/codestar/hooks/angular-query.ts' },
  docs: {
    output: './src/codestar/api.md',
    curl: true,
    baseUrl: 'https://codestar.us-east-1.amazonaws.com',
  },
})
