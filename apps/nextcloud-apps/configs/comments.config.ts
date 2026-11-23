import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/comments/openapi.json',
  output: './src/comments/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/comments/types.ts' },
  client: { output: './src/comments/client.ts', baseUrl: '/' },
  rpc: { output: './src/comments/rpc.ts', parseResponse: true },
  swr: { output: './src/comments/hooks/swr.ts' },
  'tanstack-query': { output: './src/comments/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/comments/hooks/preact-query.ts' },
  'solid-query': { output: './src/comments/hooks/solid-query.ts' },
  'vue-query': { output: './src/comments/hooks/vue-query.ts' },
  'svelte-query': { output: './src/comments/hooks/svelte-query.ts' },
  'angular-query': { output: './src/comments/hooks/angular-query.ts' },
  docs: {
    output: './src/comments/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
