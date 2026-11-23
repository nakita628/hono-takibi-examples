import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Forecast%20Types/Rollouts/260892/2026-09/forecastTypes.json',
  output: './src/crm-forecast-types/routes.ts',
  template: {},
  type: { output: './src/crm-forecast-types/types.ts' },
  client: { output: './src/crm-forecast-types/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-forecast-types/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-forecast-types/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-forecast-types/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-forecast-types/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-forecast-types/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-forecast-types/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-forecast-types/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-forecast-types/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-forecast-types/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
