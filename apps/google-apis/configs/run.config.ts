import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/run/v2/openapi.yaml',
  output: './src/run/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/run/types.ts' },
  client: { output: './src/run/client.ts', baseUrl: '/' },
  rpc: { output: './src/run/rpc.ts', parseResponse: true },
  swr: { output: './src/run/hooks/swr.ts' },
  'tanstack-query': { output: './src/run/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/run/hooks/preact-query.ts' },
  'solid-query': { output: './src/run/hooks/solid-query.ts' },
  'vue-query': { output: './src/run/hooks/vue-query.ts' },
  'svelte-query': { output: './src/run/hooks/svelte-query.ts' },
  'angular-query': { output: './src/run/hooks/angular-query.ts' },
  docs: {
    output: './src/run/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
