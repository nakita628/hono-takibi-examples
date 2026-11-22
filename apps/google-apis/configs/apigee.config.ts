import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/apigee/v1/openapi.yaml',
  output: './src/apigee/routes.ts',
  template: {},
  type: { output: './src/apigee/types.ts' },
  client: { output: './src/apigee/client.ts', baseUrl: '/' },
  rpc: { output: './src/apigee/rpc.ts', parseResponse: true },
  swr: { output: './src/apigee/hooks/swr.ts' },
  'tanstack-query': { output: './src/apigee/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/apigee/hooks/preact-query.ts' },
  'solid-query': { output: './src/apigee/hooks/solid-query.ts' },
  'vue-query': { output: './src/apigee/hooks/vue-query.ts' },
  'svelte-query': { output: './src/apigee/hooks/svelte-query.ts' },
  'angular-query': { output: './src/apigee/hooks/angular-query.ts' },
  docs: {
    output: './src/apigee/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
