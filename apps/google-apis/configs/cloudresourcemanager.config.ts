import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/cloudresourcemanager/v3/openapi.yaml',
  output: './src/cloudresourcemanager/routes.ts',
  template: {},
  type: { output: './src/cloudresourcemanager/types.ts' },
  client: { output: './src/cloudresourcemanager/client.ts', baseUrl: '/' },
  rpc: { output: './src/cloudresourcemanager/rpc.ts', parseResponse: true },
  swr: { output: './src/cloudresourcemanager/hooks/swr.ts' },
  'tanstack-query': { output: './src/cloudresourcemanager/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cloudresourcemanager/hooks/preact-query.ts' },
  'solid-query': { output: './src/cloudresourcemanager/hooks/solid-query.ts' },
  'vue-query': { output: './src/cloudresourcemanager/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cloudresourcemanager/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cloudresourcemanager/hooks/angular-query.ts' },
  docs: {
    output: './src/cloudresourcemanager/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
