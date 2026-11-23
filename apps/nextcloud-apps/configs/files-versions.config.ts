import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/files_versions/openapi.json',
  output: './src/files-versions/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/files-versions/types.ts' },
  client: { output: './src/files-versions/client.ts', baseUrl: '/' },
  rpc: { output: './src/files-versions/rpc.ts', parseResponse: true },
  swr: { output: './src/files-versions/hooks/swr.ts' },
  'tanstack-query': { output: './src/files-versions/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/files-versions/hooks/preact-query.ts' },
  'solid-query': { output: './src/files-versions/hooks/solid-query.ts' },
  'vue-query': { output: './src/files-versions/hooks/vue-query.ts' },
  'svelte-query': { output: './src/files-versions/hooks/svelte-query.ts' },
  'angular-query': { output: './src/files-versions/hooks/angular-query.ts' },
  docs: {
    output: './src/files-versions/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
