import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero_bankfeeds_v2.yaml',
  output: './src/xero_bankfeeds_v2/routes.ts',
  template: {},
  type: { output: './src/xero_bankfeeds_v2/types.ts' },
  client: { output: './src/xero_bankfeeds_v2/client.ts', baseUrl: '/' },
  rpc: { output: './src/xero_bankfeeds_v2/rpc.ts', parseResponse: true },
  swr: { output: './src/xero_bankfeeds_v2/hooks/swr.ts' },
  'tanstack-query': { output: './src/xero_bankfeeds_v2/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/xero_bankfeeds_v2/hooks/preact-query.ts' },
  'solid-query': { output: './src/xero_bankfeeds_v2/hooks/solid-query.ts' },
  'vue-query': { output: './src/xero_bankfeeds_v2/hooks/vue-query.ts' },
  'svelte-query': { output: './src/xero_bankfeeds_v2/hooks/svelte-query.ts' },
  'angular-query': { output: './src/xero_bankfeeds_v2/hooks/angular-query.ts' },
  docs: {
    output: './src/xero_bankfeeds_v2/api.md',
    curl: true,
    baseUrl: 'https://api.xero.com/bankfeeds.xro/2.0',
  },
})
