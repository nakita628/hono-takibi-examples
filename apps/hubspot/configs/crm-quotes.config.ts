import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Quotes/Rollouts/321895/2026-09/quotes.json',
  output: './src/crm-quotes/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-quotes/types.ts' },
  client: { output: './src/crm-quotes/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-quotes/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-quotes/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-quotes/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-quotes/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-quotes/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-quotes/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-quotes/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-quotes/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-quotes/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
