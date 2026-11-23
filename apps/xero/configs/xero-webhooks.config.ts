import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero-webhooks.yaml',
  output: './src/xero-webhooks/routes.ts',
  template: {},
  type: { output: './src/xero-webhooks/types.ts' },
  client: { output: './src/xero-webhooks/client.ts', baseUrl: '/' },
  rpc: { output: './src/xero-webhooks/rpc.ts', parseResponse: true },
  swr: { output: './src/xero-webhooks/hooks/swr.ts' },
  'tanstack-query': { output: './src/xero-webhooks/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/xero-webhooks/hooks/preact-query.ts' },
  'solid-query': { output: './src/xero-webhooks/hooks/solid-query.ts' },
  'vue-query': { output: './src/xero-webhooks/hooks/vue-query.ts' },
  'svelte-query': { output: './src/xero-webhooks/hooks/svelte-query.ts' },
  'angular-query': { output: './src/xero-webhooks/hooks/angular-query.ts' },
  docs: {
    output: './src/xero-webhooks/api.md',
    curl: true,
    baseUrl: 'https://api.xero.com',
  },
})
