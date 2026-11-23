import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apideck.com/accounting/9.3.0/openapi.yaml',
  output: './src/accounting/routes.ts',
  template: {},
  type: { output: './src/accounting/types.ts' },
  client: { output: './src/accounting/client.ts', baseUrl: '/' },
  rpc: { output: './src/accounting/rpc.ts', parseResponse: true },
  swr: { output: './src/accounting/hooks/swr.ts' },
  'tanstack-query': { output: './src/accounting/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/accounting/hooks/preact-query.ts' },
  'solid-query': { output: './src/accounting/hooks/solid-query.ts' },
  'vue-query': { output: './src/accounting/hooks/vue-query.ts' },
  'svelte-query': { output: './src/accounting/hooks/svelte-query.ts' },
  'angular-query': { output: './src/accounting/hooks/angular-query.ts' },
  docs: {
    output: './src/accounting/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
