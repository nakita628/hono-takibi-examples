import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Commerce/Payment%20Links/Rollouts/310885/2026-09/paymentLinks.json',
  output: './src/commerce-payment-links/routes.ts',
  template: {},
  type: { output: './src/commerce-payment-links/types.ts' },
  client: { output: './src/commerce-payment-links/client.ts', baseUrl: '/' },
  rpc: { output: './src/commerce-payment-links/rpc.ts', parseResponse: true },
  swr: { output: './src/commerce-payment-links/hooks/swr.ts' },
  'tanstack-query': { output: './src/commerce-payment-links/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/commerce-payment-links/hooks/preact-query.ts' },
  'solid-query': { output: './src/commerce-payment-links/hooks/solid-query.ts' },
  'vue-query': { output: './src/commerce-payment-links/hooks/vue-query.ts' },
  'svelte-query': { output: './src/commerce-payment-links/hooks/svelte-query.ts' },
  'angular-query': { output: './src/commerce-payment-links/hooks/angular-query.ts' },
  docs: {
    output: './src/commerce-payment-links/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
