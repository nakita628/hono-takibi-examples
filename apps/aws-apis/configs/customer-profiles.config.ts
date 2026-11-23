import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/customer-profiles/2020-08-15/openapi.yaml',
  output: './src/customer-profiles/routes.ts',
  template: {},
  type: { output: './src/customer-profiles/types.ts' },
  client: { output: './src/customer-profiles/client.ts', baseUrl: '/' },
  rpc: { output: './src/customer-profiles/rpc.ts', parseResponse: true },
  swr: { output: './src/customer-profiles/hooks/swr.ts' },
  'tanstack-query': { output: './src/customer-profiles/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/customer-profiles/hooks/preact-query.ts' },
  'solid-query': { output: './src/customer-profiles/hooks/solid-query.ts' },
  'vue-query': { output: './src/customer-profiles/hooks/vue-query.ts' },
  'svelte-query': { output: './src/customer-profiles/hooks/svelte-query.ts' },
  'angular-query': { output: './src/customer-profiles/hooks/angular-query.ts' },
  docs: {
    output: './src/customer-profiles/api.md',
    curl: true,
    baseUrl: 'https://customer-profiles.us-east-1.amazonaws.com',
  },
})
