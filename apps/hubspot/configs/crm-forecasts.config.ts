import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Forecasts/Rollouts/260892/2026-09/forecasts.json',
  output: './src/crm-forecasts/routes.ts',
  template: {},
  type: { output: './src/crm-forecasts/types.ts' },
  client: { output: './src/crm-forecasts/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-forecasts/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-forecasts/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-forecasts/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-forecasts/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-forecasts/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-forecasts/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-forecasts/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-forecasts/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-forecasts/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
