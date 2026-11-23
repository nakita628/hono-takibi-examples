import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/admin/directory_v1/openapi.yaml',
  output: './src/admin/routes.ts',
  template: {},
  type: { output: './src/admin/types.ts' },
  client: { output: './src/admin/client.ts', baseUrl: '/' },
  rpc: { output: './src/admin/rpc.ts', parseResponse: true },
  swr: { output: './src/admin/hooks/swr.ts' },
  'tanstack-query': { output: './src/admin/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/admin/hooks/preact-query.ts' },
  'solid-query': { output: './src/admin/hooks/solid-query.ts' },
  'vue-query': { output: './src/admin/hooks/vue-query.ts' },
  'svelte-query': { output: './src/admin/hooks/svelte-query.ts' },
  'angular-query': { output: './src/admin/hooks/angular-query.ts' },
  docs: {
    output: './src/admin/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
