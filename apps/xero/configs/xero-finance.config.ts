import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero-finance.yaml',
  output: './src/xero-finance/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/xero-finance/types.ts' },
  client: { output: './src/xero-finance/client.ts', baseUrl: '/' },
  rpc: { output: './src/xero-finance/rpc.ts', parseResponse: true },
  swr: { output: './src/xero-finance/hooks/swr.ts' },
  'tanstack-query': { output: './src/xero-finance/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/xero-finance/hooks/preact-query.ts' },
  'solid-query': { output: './src/xero-finance/hooks/solid-query.ts' },
  'vue-query': { output: './src/xero-finance/hooks/vue-query.ts' },
  'svelte-query': { output: './src/xero-finance/hooks/svelte-query.ts' },
  'angular-query': { output: './src/xero-finance/hooks/angular-query.ts' },
  docs: {
    output: './src/xero-finance/api.md',
    curl: true,
    baseUrl: 'https://api.xero.com/finance.xro/1.0',
  },
})
