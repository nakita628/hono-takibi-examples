import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nytimes.com/community/3.0.0/openapi.yaml',
  output: './src/community/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/community/types.ts' },
  client: { output: './src/community/client.ts', baseUrl: '/' },
  rpc: { output: './src/community/rpc.ts', parseResponse: true },
  swr: { output: './src/community/hooks/swr.ts' },
  'tanstack-query': { output: './src/community/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/community/hooks/preact-query.ts' },
  'solid-query': { output: './src/community/hooks/solid-query.ts' },
  'vue-query': { output: './src/community/hooks/vue-query.ts' },
  'svelte-query': { output: './src/community/hooks/svelte-query.ts' },
  'angular-query': { output: './src/community/hooks/angular-query.ts' },
  docs: {
    output: './src/community/api.md',
    curl: true,
    baseUrl: 'https://api.nytimes.com/svc',
  },
})
