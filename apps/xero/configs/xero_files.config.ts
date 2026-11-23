import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero_files.yaml',
  output: './src/xero_files/routes.ts',
  template: {},
  type: { output: './src/xero_files/types.ts' },
  client: { output: './src/xero_files/client.ts', baseUrl: '/' },
  rpc: { output: './src/xero_files/rpc.ts', parseResponse: true },
  swr: { output: './src/xero_files/hooks/swr.ts' },
  'tanstack-query': { output: './src/xero_files/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/xero_files/hooks/preact-query.ts' },
  'solid-query': { output: './src/xero_files/hooks/solid-query.ts' },
  'vue-query': { output: './src/xero_files/hooks/vue-query.ts' },
  'svelte-query': { output: './src/xero_files/hooks/svelte-query.ts' },
  'angular-query': { output: './src/xero_files/hooks/angular-query.ts' },
  docs: {
    output: './src/xero_files/api.md',
    curl: true,
    baseUrl: 'https://api.xero.com/files.xro/1.0/',
  },
})
