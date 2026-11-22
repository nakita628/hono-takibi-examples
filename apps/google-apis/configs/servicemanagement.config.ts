import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/servicemanagement/v1/openapi.yaml',
  output: './src/servicemanagement/routes.ts',
  template: {},
  type: { output: './src/servicemanagement/types.ts' },
  client: { output: './src/servicemanagement/client.ts', baseUrl: '/' },
  rpc: { output: './src/servicemanagement/rpc.ts', parseResponse: true },
  swr: { output: './src/servicemanagement/hooks/swr.ts' },
  'tanstack-query': { output: './src/servicemanagement/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/servicemanagement/hooks/preact-query.ts' },
  'solid-query': { output: './src/servicemanagement/hooks/solid-query.ts' },
  'vue-query': { output: './src/servicemanagement/hooks/vue-query.ts' },
  'svelte-query': { output: './src/servicemanagement/hooks/svelte-query.ts' },
  'angular-query': { output: './src/servicemanagement/hooks/angular-query.ts' },
  docs: {
    output: './src/servicemanagement/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
