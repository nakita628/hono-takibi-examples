import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/ideahub/v1alpha/openapi.yaml',
  output: './src/ideahub/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/ideahub/types.ts' },
  client: { output: './src/ideahub/client.ts', baseUrl: '/' },
  rpc: { output: './src/ideahub/rpc.ts', parseResponse: true },
  swr: { output: './src/ideahub/hooks/swr.ts' },
  'tanstack-query': { output: './src/ideahub/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ideahub/hooks/preact-query.ts' },
  'solid-query': { output: './src/ideahub/hooks/solid-query.ts' },
  'vue-query': { output: './src/ideahub/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ideahub/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ideahub/hooks/angular-query.ts' },
  docs: {
    output: './src/ideahub/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
