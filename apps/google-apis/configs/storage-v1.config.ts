import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/storage/v1/openapi.yaml',
  output: './src/storage-v1/routes.ts',
  template: {},
  type: { output: './src/storage-v1/types.ts' },
  client: { output: './src/storage-v1/client.ts', baseUrl: '/' },
  rpc: { output: './src/storage-v1/rpc.ts', parseResponse: true },
  swr: { output: './src/storage-v1/hooks/swr.ts' },
  'tanstack-query': { output: './src/storage-v1/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/storage-v1/hooks/preact-query.ts' },
  'solid-query': { output: './src/storage-v1/hooks/solid-query.ts' },
  'vue-query': { output: './src/storage-v1/hooks/vue-query.ts' },
  'svelte-query': { output: './src/storage-v1/hooks/svelte-query.ts' },
  'angular-query': { output: './src/storage-v1/hooks/angular-query.ts' },
  docs: {
    output: './src/storage-v1/api.md',
    curl: true,
    baseUrl: 'https://storage.googleapis.com/storage/v1',
  },
})
