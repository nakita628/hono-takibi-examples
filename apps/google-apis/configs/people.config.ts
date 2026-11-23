import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/people/v1/openapi.yaml',
  output: './src/people/routes.ts',
  template: {},
  type: { output: './src/people/types.ts' },
  client: { output: './src/people/client.ts', baseUrl: '/' },
  rpc: { output: './src/people/rpc.ts', parseResponse: true },
  swr: { output: './src/people/hooks/swr.ts' },
  'tanstack-query': { output: './src/people/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/people/hooks/preact-query.ts' },
  'solid-query': { output: './src/people/hooks/solid-query.ts' },
  'vue-query': { output: './src/people/hooks/vue-query.ts' },
  'svelte-query': { output: './src/people/hooks/svelte-query.ts' },
  'angular-query': { output: './src/people/hooks/angular-query.ts' },
  docs: {
    output: './src/people/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
