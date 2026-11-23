import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Commerce/Paymentsaccounts/Rollouts/320893/2026-09/paymentsaccounts.json',
  output: './src/commerce-paymentsaccounts/routes.ts',
  template: {},
  type: { output: './src/commerce-paymentsaccounts/types.ts' },
  client: { output: './src/commerce-paymentsaccounts/client.ts', baseUrl: '/' },
  rpc: { output: './src/commerce-paymentsaccounts/rpc.ts', parseResponse: true },
  swr: { output: './src/commerce-paymentsaccounts/hooks/swr.ts' },
  'tanstack-query': { output: './src/commerce-paymentsaccounts/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/commerce-paymentsaccounts/hooks/preact-query.ts' },
  'solid-query': { output: './src/commerce-paymentsaccounts/hooks/solid-query.ts' },
  'vue-query': { output: './src/commerce-paymentsaccounts/hooks/vue-query.ts' },
  'svelte-query': { output: './src/commerce-paymentsaccounts/hooks/svelte-query.ts' },
  'angular-query': { output: './src/commerce-paymentsaccounts/hooks/angular-query.ts' },
  docs: {
    output: './src/commerce-paymentsaccounts/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
