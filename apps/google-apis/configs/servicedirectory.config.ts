import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/servicedirectory/v1beta1/openapi.yaml',
  output: './src/servicedirectory/routes.ts',
  template: {},
  type: { output: './src/servicedirectory/types.ts' },
  client: { output: './src/servicedirectory/client.ts', baseUrl: '/' },
  rpc: { output: './src/servicedirectory/rpc.ts', parseResponse: true },
  swr: { output: './src/servicedirectory/hooks/swr.ts' },
  'tanstack-query': { output: './src/servicedirectory/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/servicedirectory/hooks/preact-query.ts' },
  'solid-query': { output: './src/servicedirectory/hooks/solid-query.ts' },
  'vue-query': { output: './src/servicedirectory/hooks/vue-query.ts' },
  'svelte-query': { output: './src/servicedirectory/hooks/svelte-query.ts' },
  'angular-query': { output: './src/servicedirectory/hooks/angular-query.ts' },
  docs: {
    output: './src/servicedirectory/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
