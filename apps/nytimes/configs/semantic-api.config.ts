import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nytimes.com/semantic_api/2.0.0/openapi.yaml',
  output: './src/semantic-api/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/semantic-api/types.ts' },
  client: { output: './src/semantic-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/semantic-api/rpc.ts', parseResponse: true },
  swr: { output: './src/semantic-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/semantic-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/semantic-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/semantic-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/semantic-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/semantic-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/semantic-api/hooks/angular-query.ts' },
  docs: {
    output: './src/semantic-api/api.md',
    curl: true,
    baseUrl: 'https://api.nytimes.com/svc',
  },
})
