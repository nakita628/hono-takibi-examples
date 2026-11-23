import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero_accounting.yaml',
  output: './src/xero_accounting/routes.ts',
  template: {},
  type: { output: './src/xero_accounting/types.ts' },
  client: { output: './src/xero_accounting/client.ts', baseUrl: '/' },
  rpc: { output: './src/xero_accounting/rpc.ts', parseResponse: true },
  swr: { output: './src/xero_accounting/hooks/swr.ts' },
  'tanstack-query': { output: './src/xero_accounting/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/xero_accounting/hooks/preact-query.ts' },
  'solid-query': { output: './src/xero_accounting/hooks/solid-query.ts' },
  'vue-query': { output: './src/xero_accounting/hooks/vue-query.ts' },
  'svelte-query': { output: './src/xero_accounting/hooks/svelte-query.ts' },
  'angular-query': { output: './src/xero_accounting/hooks/angular-query.ts' },
  docs: {
    output: './src/xero_accounting/api.md',
    curl: true,
    baseUrl: 'https://api.xero.com/api.xro/2.0',
  },
})
