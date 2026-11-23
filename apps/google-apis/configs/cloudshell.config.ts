import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/cloudshell/v1/openapi.yaml',
  output: './src/cloudshell/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/cloudshell/types.ts' },
  client: { output: './src/cloudshell/client.ts', baseUrl: '/' },
  rpc: { output: './src/cloudshell/rpc.ts', parseResponse: true },
  swr: { output: './src/cloudshell/hooks/swr.ts' },
  'tanstack-query': { output: './src/cloudshell/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cloudshell/hooks/preact-query.ts' },
  'solid-query': { output: './src/cloudshell/hooks/solid-query.ts' },
  'vue-query': { output: './src/cloudshell/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cloudshell/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cloudshell/hooks/angular-query.ts' },
  docs: {
    output: './src/cloudshell/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
