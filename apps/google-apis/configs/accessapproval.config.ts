import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/accessapproval/v1/openapi.yaml',
  output: './src/accessapproval/routes.ts',
  template: {},
  type: { output: './src/accessapproval/types.ts' },
  client: { output: './src/accessapproval/client.ts', baseUrl: '/' },
  rpc: { output: './src/accessapproval/rpc.ts', parseResponse: true },
  swr: { output: './src/accessapproval/hooks/swr.ts' },
  'tanstack-query': { output: './src/accessapproval/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/accessapproval/hooks/preact-query.ts' },
  'solid-query': { output: './src/accessapproval/hooks/solid-query.ts' },
  'vue-query': { output: './src/accessapproval/hooks/vue-query.ts' },
  'svelte-query': { output: './src/accessapproval/hooks/svelte-query.ts' },
  'angular-query': { output: './src/accessapproval/hooks/angular-query.ts' },
  docs: {
    output: './src/accessapproval/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
