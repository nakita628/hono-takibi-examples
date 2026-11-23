import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/androidenterprise/v1/openapi.yaml',
  output: './src/androidenterprise/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/androidenterprise/types.ts' },
  client: { output: './src/androidenterprise/client.ts', baseUrl: '/' },
  rpc: { output: './src/androidenterprise/rpc.ts', parseResponse: true },
  swr: { output: './src/androidenterprise/hooks/swr.ts' },
  'tanstack-query': { output: './src/androidenterprise/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/androidenterprise/hooks/preact-query.ts' },
  'solid-query': { output: './src/androidenterprise/hooks/solid-query.ts' },
  'vue-query': { output: './src/androidenterprise/hooks/vue-query.ts' },
  'svelte-query': { output: './src/androidenterprise/hooks/svelte-query.ts' },
  'angular-query': { output: './src/androidenterprise/hooks/angular-query.ts' },
  docs: {
    output: './src/androidenterprise/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
