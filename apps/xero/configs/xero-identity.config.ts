import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero-identity.yaml',
  output: './src/xero-identity/routes.ts',
  template: {},
  type: { output: './src/xero-identity/types.ts' },
  client: { output: './src/xero-identity/client.ts', baseUrl: '/' },
  rpc: { output: './src/xero-identity/rpc.ts', parseResponse: true },
  swr: { output: './src/xero-identity/hooks/swr.ts' },
  'tanstack-query': { output: './src/xero-identity/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/xero-identity/hooks/preact-query.ts' },
  'solid-query': { output: './src/xero-identity/hooks/solid-query.ts' },
  'vue-query': { output: './src/xero-identity/hooks/vue-query.ts' },
  'svelte-query': { output: './src/xero-identity/hooks/svelte-query.ts' },
  'angular-query': { output: './src/xero-identity/hooks/angular-query.ts' },
  docs: {
    output: './src/xero-identity/api.md',
    curl: true,
    baseUrl: 'https://api.xero.com',
  },
})
