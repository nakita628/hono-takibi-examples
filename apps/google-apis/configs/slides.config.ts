import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/slides/v1/openapi.yaml',
  output: './src/slides/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/slides/types.ts' },
  client: { output: './src/slides/client.ts', baseUrl: '/' },
  rpc: { output: './src/slides/rpc.ts', parseResponse: true },
  swr: { output: './src/slides/hooks/swr.ts' },
  'tanstack-query': { output: './src/slides/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/slides/hooks/preact-query.ts' },
  'solid-query': { output: './src/slides/hooks/solid-query.ts' },
  'vue-query': { output: './src/slides/hooks/vue-query.ts' },
  'svelte-query': { output: './src/slides/hooks/svelte-query.ts' },
  'angular-query': { output: './src/slides/hooks/angular-query.ts' },
  docs: {
    output: './src/slides/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
