import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apideck.com/file-storage/9.3.0/openapi.yaml',
  output: './src/file-storage/routes.ts',
  template: {},
  type: { output: './src/file-storage/types.ts' },
  client: { output: './src/file-storage/client.ts', baseUrl: '/' },
  rpc: { output: './src/file-storage/rpc.ts', parseResponse: true },
  swr: { output: './src/file-storage/hooks/swr.ts' },
  'tanstack-query': { output: './src/file-storage/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/file-storage/hooks/preact-query.ts' },
  'solid-query': { output: './src/file-storage/hooks/solid-query.ts' },
  'vue-query': { output: './src/file-storage/hooks/vue-query.ts' },
  'svelte-query': { output: './src/file-storage/hooks/svelte-query.ts' },
  'angular-query': { output: './src/file-storage/hooks/angular-query.ts' },
  docs: {
    output: './src/file-storage/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
