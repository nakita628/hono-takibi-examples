import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/files_trashbin/openapi.json',
  output: './src/files-trashbin/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/files-trashbin/types.ts' },
  client: { output: './src/files-trashbin/client.ts', baseUrl: '/' },
  rpc: { output: './src/files-trashbin/rpc.ts', parseResponse: true },
  swr: { output: './src/files-trashbin/hooks/swr.ts' },
  'tanstack-query': { output: './src/files-trashbin/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/files-trashbin/hooks/preact-query.ts' },
  'solid-query': { output: './src/files-trashbin/hooks/solid-query.ts' },
  'vue-query': { output: './src/files-trashbin/hooks/vue-query.ts' },
  'svelte-query': { output: './src/files-trashbin/hooks/svelte-query.ts' },
  'angular-query': { output: './src/files-trashbin/hooks/angular-query.ts' },
  docs: {
    output: './src/files-trashbin/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
