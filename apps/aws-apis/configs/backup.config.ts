import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/backup/2018-11-15/openapi.yaml',
  output: './src/backup/routes.ts',
  template: {},
  type: { output: './src/backup/types.ts' },
  client: { output: './src/backup/client.ts', baseUrl: '/' },
  rpc: { output: './src/backup/rpc.ts', parseResponse: true },
  swr: { output: './src/backup/hooks/swr.ts' },
  'tanstack-query': { output: './src/backup/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/backup/hooks/preact-query.ts' },
  'solid-query': { output: './src/backup/hooks/solid-query.ts' },
  'vue-query': { output: './src/backup/hooks/vue-query.ts' },
  'svelte-query': { output: './src/backup/hooks/svelte-query.ts' },
  'angular-query': { output: './src/backup/hooks/angular-query.ts' },
  docs: {
    output: './src/backup/api.md',
    curl: true,
    baseUrl: 'https://backup.us-east-1.amazonaws.com',
  },
})
