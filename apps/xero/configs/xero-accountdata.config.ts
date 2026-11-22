import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero-accountdata.yaml',
  output: './src/xero-accountdata/routes.ts',
  template: {},
  type: { output: './src/xero-accountdata/types.ts' },
  client: { output: './src/xero-accountdata/client.ts', baseUrl: '/' },
  rpc: { output: './src/xero-accountdata/rpc.ts', parseResponse: true },
  swr: { output: './src/xero-accountdata/hooks/swr.ts' },
  'tanstack-query': { output: './src/xero-accountdata/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/xero-accountdata/hooks/preact-query.ts' },
  'solid-query': { output: './src/xero-accountdata/hooks/solid-query.ts' },
  'vue-query': { output: './src/xero-accountdata/hooks/vue-query.ts' },
  'svelte-query': { output: './src/xero-accountdata/hooks/svelte-query.ts' },
  'angular-query': { output: './src/xero-accountdata/hooks/angular-query.ts' },
  docs: {
    output: './src/xero-accountdata/api.md',
    curl: true,
    baseUrl: 'https://api.xero.com/accountdata.xro/1.0',
  },
})
