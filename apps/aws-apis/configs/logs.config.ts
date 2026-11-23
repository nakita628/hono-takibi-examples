import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/logs/2014-03-28/openapi.yaml',
  output: './src/logs/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/logs/types.ts' },
  client: { output: './src/logs/client.ts', baseUrl: '/' },
  rpc: { output: './src/logs/rpc.ts', parseResponse: true },
  swr: { output: './src/logs/hooks/swr.ts' },
  'tanstack-query': { output: './src/logs/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/logs/hooks/preact-query.ts' },
  'solid-query': { output: './src/logs/hooks/solid-query.ts' },
  'vue-query': { output: './src/logs/hooks/vue-query.ts' },
  'svelte-query': { output: './src/logs/hooks/svelte-query.ts' },
  'angular-query': { output: './src/logs/hooks/angular-query.ts' },
  docs: {
    output: './src/logs/api.md',
    curl: true,
    baseUrl: 'https://logs.us-east-1.amazonaws.com',
  },
})
