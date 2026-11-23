import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/container/v1beta1/openapi.yaml',
  output: './src/container/routes.ts',
  template: {},
  type: { output: './src/container/types.ts' },
  client: { output: './src/container/client.ts', baseUrl: '/' },
  rpc: { output: './src/container/rpc.ts', parseResponse: true },
  swr: { output: './src/container/hooks/swr.ts' },
  'tanstack-query': { output: './src/container/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/container/hooks/preact-query.ts' },
  'solid-query': { output: './src/container/hooks/solid-query.ts' },
  'vue-query': { output: './src/container/hooks/vue-query.ts' },
  'svelte-query': { output: './src/container/hooks/svelte-query.ts' },
  'angular-query': { output: './src/container/hooks/angular-query.ts' },
  docs: {
    output: './src/container/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
