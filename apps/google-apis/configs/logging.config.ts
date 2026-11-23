import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/logging/v2/openapi.yaml',
  output: './src/logging/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/logging/types.ts' },
  client: { output: './src/logging/client.ts', baseUrl: '/' },
  rpc: { output: './src/logging/rpc.ts', parseResponse: true },
  swr: { output: './src/logging/hooks/swr.ts' },
  'tanstack-query': { output: './src/logging/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/logging/hooks/preact-query.ts' },
  'solid-query': { output: './src/logging/hooks/solid-query.ts' },
  'vue-query': { output: './src/logging/hooks/vue-query.ts' },
  'svelte-query': { output: './src/logging/hooks/svelte-query.ts' },
  'angular-query': { output: './src/logging/hooks/angular-query.ts' },
  docs: {
    output: './src/logging/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
