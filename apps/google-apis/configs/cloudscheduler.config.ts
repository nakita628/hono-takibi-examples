import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/cloudscheduler/v1beta1/openapi.yaml',
  output: './src/cloudscheduler/routes.ts',
  template: {},
  type: { output: './src/cloudscheduler/types.ts' },
  client: { output: './src/cloudscheduler/client.ts', baseUrl: '/' },
  rpc: { output: './src/cloudscheduler/rpc.ts', parseResponse: true },
  swr: { output: './src/cloudscheduler/hooks/swr.ts' },
  'tanstack-query': { output: './src/cloudscheduler/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cloudscheduler/hooks/preact-query.ts' },
  'solid-query': { output: './src/cloudscheduler/hooks/solid-query.ts' },
  'vue-query': { output: './src/cloudscheduler/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cloudscheduler/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cloudscheduler/hooks/angular-query.ts' },
  docs: {
    output: './src/cloudscheduler/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
