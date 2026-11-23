import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero-app-store.yaml',
  output: './src/xero-app-store/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/xero-app-store/types.ts' },
  client: { output: './src/xero-app-store/client.ts', baseUrl: '/' },
  rpc: { output: './src/xero-app-store/rpc.ts', parseResponse: true },
  swr: { output: './src/xero-app-store/hooks/swr.ts' },
  'tanstack-query': { output: './src/xero-app-store/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/xero-app-store/hooks/preact-query.ts' },
  'solid-query': { output: './src/xero-app-store/hooks/solid-query.ts' },
  'vue-query': { output: './src/xero-app-store/hooks/vue-query.ts' },
  'svelte-query': { output: './src/xero-app-store/hooks/svelte-query.ts' },
  'angular-query': { output: './src/xero-app-store/hooks/angular-query.ts' },
  docs: {
    output: './src/xero-app-store/api.md',
    curl: true,
    baseUrl: 'https://api.xero.com/appstore/2.0',
  },
})
