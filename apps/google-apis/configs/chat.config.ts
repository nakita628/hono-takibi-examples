import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/chat/v1/openapi.yaml',
  output: './src/chat/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/chat/types.ts' },
  client: { output: './src/chat/client.ts', baseUrl: '/' },
  rpc: { output: './src/chat/rpc.ts', parseResponse: true },
  swr: { output: './src/chat/hooks/swr.ts' },
  'tanstack-query': { output: './src/chat/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/chat/hooks/preact-query.ts' },
  'solid-query': { output: './src/chat/hooks/solid-query.ts' },
  'vue-query': { output: './src/chat/hooks/vue-query.ts' },
  'svelte-query': { output: './src/chat/hooks/svelte-query.ts' },
  'angular-query': { output: './src/chat/hooks/angular-query.ts' },
  docs: {
    output: './src/chat/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
