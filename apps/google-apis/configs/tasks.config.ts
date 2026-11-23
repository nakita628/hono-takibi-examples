import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/tasks/v1/openapi.yaml',
  output: './src/tasks/routes.ts',
  template: {},
  type: { output: './src/tasks/types.ts' },
  client: { output: './src/tasks/client.ts', baseUrl: '/' },
  rpc: { output: './src/tasks/rpc.ts', parseResponse: true },
  swr: { output: './src/tasks/hooks/swr.ts' },
  'tanstack-query': { output: './src/tasks/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/tasks/hooks/preact-query.ts' },
  'solid-query': { output: './src/tasks/hooks/solid-query.ts' },
  'vue-query': { output: './src/tasks/hooks/vue-query.ts' },
  'svelte-query': { output: './src/tasks/hooks/svelte-query.ts' },
  'angular-query': { output: './src/tasks/hooks/angular-query.ts' },
  docs: {
    output: './src/tasks/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
