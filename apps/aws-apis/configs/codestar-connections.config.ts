import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/codestar-connections/2019-12-01/openapi.yaml',
  output: './src/codestar-connections/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/codestar-connections/types.ts' },
  client: { output: './src/codestar-connections/client.ts', baseUrl: '/' },
  rpc: { output: './src/codestar-connections/rpc.ts', parseResponse: true },
  swr: { output: './src/codestar-connections/hooks/swr.ts' },
  'tanstack-query': { output: './src/codestar-connections/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/codestar-connections/hooks/preact-query.ts' },
  'solid-query': { output: './src/codestar-connections/hooks/solid-query.ts' },
  'vue-query': { output: './src/codestar-connections/hooks/vue-query.ts' },
  'svelte-query': { output: './src/codestar-connections/hooks/svelte-query.ts' },
  'angular-query': { output: './src/codestar-connections/hooks/angular-query.ts' },
  docs: {
    output: './src/codestar-connections/api.md',
    curl: true,
    baseUrl: 'https://codestar-connections.us-east-1.amazonaws.com',
  },
})
