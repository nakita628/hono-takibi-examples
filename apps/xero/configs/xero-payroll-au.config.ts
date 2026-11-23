import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero-payroll-au.yaml',
  output: './src/xero-payroll-au/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/xero-payroll-au/types.ts' },
  client: { output: './src/xero-payroll-au/client.ts', baseUrl: '/' },
  rpc: { output: './src/xero-payroll-au/rpc.ts', parseResponse: true },
  swr: { output: './src/xero-payroll-au/hooks/swr.ts' },
  'tanstack-query': { output: './src/xero-payroll-au/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/xero-payroll-au/hooks/preact-query.ts' },
  'solid-query': { output: './src/xero-payroll-au/hooks/solid-query.ts' },
  'vue-query': { output: './src/xero-payroll-au/hooks/vue-query.ts' },
  'svelte-query': { output: './src/xero-payroll-au/hooks/svelte-query.ts' },
  'angular-query': { output: './src/xero-payroll-au/hooks/angular-query.ts' },
  docs: {
    output: './src/xero-payroll-au/api.md',
    curl: true,
    baseUrl: 'https://api.xero.com/payroll.xro/1.0',
  },
})
