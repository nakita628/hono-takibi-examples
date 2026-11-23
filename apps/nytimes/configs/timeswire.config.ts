import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nytimes.com/timeswire/3.0.0/openapi.yaml',
  output: './src/timeswire/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/timeswire/types.ts' },
  client: { output: './src/timeswire/client.ts', baseUrl: '/' },
  rpc: { output: './src/timeswire/rpc.ts', parseResponse: true },
  swr: { output: './src/timeswire/hooks/swr.ts' },
  'tanstack-query': { output: './src/timeswire/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/timeswire/hooks/preact-query.ts' },
  'solid-query': { output: './src/timeswire/hooks/solid-query.ts' },
  'vue-query': { output: './src/timeswire/hooks/vue-query.ts' },
  'svelte-query': { output: './src/timeswire/hooks/svelte-query.ts' },
  'angular-query': { output: './src/timeswire/hooks/angular-query.ts' },
  docs: {
    output: './src/timeswire/api.md',
    curl: true,
    baseUrl: 'https://api.nytimes.com/svc',
  },
})
