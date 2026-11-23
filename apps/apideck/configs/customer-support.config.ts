import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apideck.com/customer-support/9.3.0/openapi.yaml',
  output: './src/customer-support/routes.ts',
  template: {},
  type: { output: './src/customer-support/types.ts' },
  client: { output: './src/customer-support/client.ts', baseUrl: '/' },
  rpc: { output: './src/customer-support/rpc.ts', parseResponse: true },
  swr: { output: './src/customer-support/hooks/swr.ts' },
  'tanstack-query': { output: './src/customer-support/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/customer-support/hooks/preact-query.ts' },
  'solid-query': { output: './src/customer-support/hooks/solid-query.ts' },
  'vue-query': { output: './src/customer-support/hooks/vue-query.ts' },
  'svelte-query': { output: './src/customer-support/hooks/svelte-query.ts' },
  'angular-query': { output: './src/customer-support/hooks/angular-query.ts' },
  docs: {
    output: './src/customer-support/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
