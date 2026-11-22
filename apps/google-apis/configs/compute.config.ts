import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/compute/v1/openapi.yaml',
  output: './src/compute/routes.ts',
  template: {},
  type: { output: './src/compute/types.ts' },
  client: { output: './src/compute/client.ts', baseUrl: '/' },
  rpc: { output: './src/compute/rpc.ts', parseResponse: true },
  swr: { output: './src/compute/hooks/swr.ts' },
  'tanstack-query': { output: './src/compute/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/compute/hooks/preact-query.ts' },
  'solid-query': { output: './src/compute/hooks/solid-query.ts' },
  'vue-query': { output: './src/compute/hooks/vue-query.ts' },
  'svelte-query': { output: './src/compute/hooks/svelte-query.ts' },
  'angular-query': { output: './src/compute/hooks/angular-query.ts' },
  docs: {
    output: './src/compute/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
