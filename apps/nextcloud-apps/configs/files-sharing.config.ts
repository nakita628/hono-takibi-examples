import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/files_sharing/openapi.json',
  output: './src/files-sharing/routes.ts',
  template: {},
  type: { output: './src/files-sharing/types.ts' },
  client: { output: './src/files-sharing/client.ts', baseUrl: '/' },
  rpc: { output: './src/files-sharing/rpc.ts', parseResponse: true },
  swr: { output: './src/files-sharing/hooks/swr.ts' },
  'tanstack-query': { output: './src/files-sharing/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/files-sharing/hooks/preact-query.ts' },
  'solid-query': { output: './src/files-sharing/hooks/solid-query.ts' },
  'vue-query': { output: './src/files-sharing/hooks/vue-query.ts' },
  'svelte-query': { output: './src/files-sharing/hooks/svelte-query.ts' },
  'angular-query': { output: './src/files-sharing/hooks/angular-query.ts' },
  docs: {
    output: './src/files-sharing/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
