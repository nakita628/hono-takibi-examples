import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero-payroll-nz.yaml',
  output: './src/xero-payroll-nz/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/xero-payroll-nz/types.ts' },
  client: { output: './src/xero-payroll-nz/client.ts', baseUrl: '/' },
  rpc: { output: './src/xero-payroll-nz/rpc.ts', parseResponse: true },
  swr: { output: './src/xero-payroll-nz/hooks/swr.ts' },
  'tanstack-query': { output: './src/xero-payroll-nz/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/xero-payroll-nz/hooks/preact-query.ts' },
  'solid-query': { output: './src/xero-payroll-nz/hooks/solid-query.ts' },
  'vue-query': { output: './src/xero-payroll-nz/hooks/vue-query.ts' },
  'svelte-query': { output: './src/xero-payroll-nz/hooks/svelte-query.ts' },
  'angular-query': { output: './src/xero-payroll-nz/hooks/angular-query.ts' },
  docs: {
    output: './src/xero-payroll-nz/api.md',
    curl: true,
    baseUrl: 'https://api.xero.com/payroll.xro/2.0',
  },
})
