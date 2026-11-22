import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/gkebackup/v1/openapi.yaml',
  output: './src/gkebackup/routes.ts',
  template: {},
  type: { output: './src/gkebackup/types.ts' },
  client: { output: './src/gkebackup/client.ts', baseUrl: '/' },
  rpc: { output: './src/gkebackup/rpc.ts', parseResponse: true },
  swr: { output: './src/gkebackup/hooks/swr.ts' },
  'tanstack-query': { output: './src/gkebackup/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/gkebackup/hooks/preact-query.ts' },
  'solid-query': { output: './src/gkebackup/hooks/solid-query.ts' },
  'vue-query': { output: './src/gkebackup/hooks/vue-query.ts' },
  'svelte-query': { output: './src/gkebackup/hooks/svelte-query.ts' },
  'angular-query': { output: './src/gkebackup/hooks/angular-query.ts' },
  docs: {
    output: './src/gkebackup/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
