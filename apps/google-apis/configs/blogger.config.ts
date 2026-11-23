import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/blogger/v3/openapi.yaml',
  output: './src/blogger/routes.ts',
  template: {},
  type: { output: './src/blogger/types.ts' },
  client: { output: './src/blogger/client.ts', baseUrl: '/' },
  rpc: { output: './src/blogger/rpc.ts', parseResponse: true },
  swr: { output: './src/blogger/hooks/swr.ts' },
  'tanstack-query': { output: './src/blogger/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/blogger/hooks/preact-query.ts' },
  'solid-query': { output: './src/blogger/hooks/solid-query.ts' },
  'vue-query': { output: './src/blogger/hooks/vue-query.ts' },
  'svelte-query': { output: './src/blogger/hooks/svelte-query.ts' },
  'angular-query': { output: './src/blogger/hooks/angular-query.ts' },
  docs: {
    output: './src/blogger/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
