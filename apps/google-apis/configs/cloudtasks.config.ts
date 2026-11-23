import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/cloudtasks/v2beta3/openapi.yaml',
  output: './src/cloudtasks/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/cloudtasks/types.ts' },
  client: { output: './src/cloudtasks/client.ts', baseUrl: '/' },
  rpc: { output: './src/cloudtasks/rpc.ts', parseResponse: true },
  swr: { output: './src/cloudtasks/hooks/swr.ts' },
  'tanstack-query': { output: './src/cloudtasks/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cloudtasks/hooks/preact-query.ts' },
  'solid-query': { output: './src/cloudtasks/hooks/solid-query.ts' },
  'vue-query': { output: './src/cloudtasks/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cloudtasks/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cloudtasks/hooks/angular-query.ts' },
  docs: {
    output: './src/cloudtasks/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
