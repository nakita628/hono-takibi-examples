import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/localservices/v1/openapi.yaml',
  output: './src/localservices/routes.ts',
  template: {},
  type: { output: './src/localservices/types.ts' },
  client: { output: './src/localservices/client.ts', baseUrl: '/' },
  rpc: { output: './src/localservices/rpc.ts', parseResponse: true },
  swr: { output: './src/localservices/hooks/swr.ts' },
  'tanstack-query': { output: './src/localservices/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/localservices/hooks/preact-query.ts' },
  'solid-query': { output: './src/localservices/hooks/solid-query.ts' },
  'vue-query': { output: './src/localservices/hooks/vue-query.ts' },
  'svelte-query': { output: './src/localservices/hooks/svelte-query.ts' },
  'angular-query': { output: './src/localservices/hooks/angular-query.ts' },
  docs: {
    output: './src/localservices/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
