import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero-payroll-uk.yaml',
  output: './src/xero-payroll-uk/routes.ts',
  template: {},
  type: { output: './src/xero-payroll-uk/types.ts' },
  client: { output: './src/xero-payroll-uk/client.ts', baseUrl: '/' },
  rpc: { output: './src/xero-payroll-uk/rpc.ts', parseResponse: true },
  swr: { output: './src/xero-payroll-uk/hooks/swr.ts' },
  'tanstack-query': { output: './src/xero-payroll-uk/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/xero-payroll-uk/hooks/preact-query.ts' },
  'solid-query': { output: './src/xero-payroll-uk/hooks/solid-query.ts' },
  'vue-query': { output: './src/xero-payroll-uk/hooks/vue-query.ts' },
  'svelte-query': { output: './src/xero-payroll-uk/hooks/svelte-query.ts' },
  'angular-query': { output: './src/xero-payroll-uk/hooks/angular-query.ts' },
  docs: {
    output: './src/xero-payroll-uk/api.md',
    curl: true,
    baseUrl: 'https://api.xero.com/payroll.xro/2.0',
  },
})
