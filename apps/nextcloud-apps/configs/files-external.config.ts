import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/files_external/openapi.json',
  output: './src/files-external/routes.ts',
  template: {},
  type: { output: './src/files-external/types.ts' },
  client: { output: './src/files-external/client.ts', baseUrl: '/' },
  rpc: { output: './src/files-external/rpc.ts', parseResponse: true },
  swr: { output: './src/files-external/hooks/swr.ts' },
  'tanstack-query': { output: './src/files-external/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/files-external/hooks/preact-query.ts' },
  'solid-query': { output: './src/files-external/hooks/solid-query.ts' },
  'vue-query': { output: './src/files-external/hooks/vue-query.ts' },
  'svelte-query': { output: './src/files-external/hooks/svelte-query.ts' },
  'angular-query': { output: './src/files-external/hooks/angular-query.ts' },
  docs: {
    output: './src/files-external/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
