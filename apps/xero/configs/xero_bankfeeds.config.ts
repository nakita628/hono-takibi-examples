import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero_bankfeeds.yaml',
  output: './src/xero_bankfeeds/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/xero_bankfeeds/types.ts' },
  client: { output: './src/xero_bankfeeds/client.ts', baseUrl: '/' },
  rpc: { output: './src/xero_bankfeeds/rpc.ts', parseResponse: true },
  swr: { output: './src/xero_bankfeeds/hooks/swr.ts' },
  'tanstack-query': { output: './src/xero_bankfeeds/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/xero_bankfeeds/hooks/preact-query.ts' },
  'solid-query': { output: './src/xero_bankfeeds/hooks/solid-query.ts' },
  'vue-query': { output: './src/xero_bankfeeds/hooks/vue-query.ts' },
  'svelte-query': { output: './src/xero_bankfeeds/hooks/svelte-query.ts' },
  'angular-query': { output: './src/xero_bankfeeds/hooks/angular-query.ts' },
  docs: {
    output: './src/xero_bankfeeds/api.md',
    curl: true,
    baseUrl: 'https://api.xero.com/bankfeeds.xro/1.0',
  },
})
