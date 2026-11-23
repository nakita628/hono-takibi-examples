import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/docs/v1/openapi.yaml',
  output: './src/docs/routes.ts',
  template: {},
  type: { output: './src/docs/types.ts' },
  client: { output: './src/docs/client.ts', baseUrl: '/' },
  rpc: { output: './src/docs/rpc.ts', parseResponse: true },
  swr: { output: './src/docs/hooks/swr.ts' },
  'tanstack-query': { output: './src/docs/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/docs/hooks/preact-query.ts' },
  'solid-query': { output: './src/docs/hooks/solid-query.ts' },
  'vue-query': { output: './src/docs/hooks/vue-query.ts' },
  'svelte-query': { output: './src/docs/hooks/svelte-query.ts' },
  'angular-query': { output: './src/docs/hooks/angular-query.ts' },
  docs: {
    output: './src/docs/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
