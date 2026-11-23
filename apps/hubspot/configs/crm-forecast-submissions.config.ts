import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Forecast%20Submissions/Rollouts/260892/2026-09/forecastSubmissions.json',
  output: './src/crm-forecast-submissions/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-forecast-submissions/types.ts' },
  client: { output: './src/crm-forecast-submissions/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-forecast-submissions/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-forecast-submissions/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-forecast-submissions/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-forecast-submissions/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-forecast-submissions/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-forecast-submissions/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-forecast-submissions/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-forecast-submissions/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-forecast-submissions/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
