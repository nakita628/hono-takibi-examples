import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero_assets.yaml',
  output: './src/xero_assets/routes.ts',
  template: {},
  type: { output: './src/xero_assets/types.ts' },
  client: { output: './src/xero_assets/client.ts', baseUrl: '/' },
  rpc: { output: './src/xero_assets/rpc.ts', parseResponse: true },
  swr: { output: './src/xero_assets/hooks/swr.ts' },
  'tanstack-query': { output: './src/xero_assets/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/xero_assets/hooks/preact-query.ts' },
  'solid-query': { output: './src/xero_assets/hooks/solid-query.ts' },
  'vue-query': { output: './src/xero_assets/hooks/vue-query.ts' },
  'svelte-query': { output: './src/xero_assets/hooks/svelte-query.ts' },
  'angular-query': { output: './src/xero_assets/hooks/angular-query.ts' },
  docs: {
    output: './src/xero_assets/api.md',
    curl: true,
    baseUrl: 'https://api.xero.com/assets.xro/1.0',
  },
})
