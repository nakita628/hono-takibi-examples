import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Settings/Tax%20Rates/Rollouts/207908/2026-09/taxRates.json',
  output: './src/settings-tax-rates/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/settings-tax-rates/types.ts' },
  client: { output: './src/settings-tax-rates/client.ts', baseUrl: '/' },
  rpc: { output: './src/settings-tax-rates/rpc.ts', parseResponse: true },
  swr: { output: './src/settings-tax-rates/hooks/swr.ts' },
  'tanstack-query': { output: './src/settings-tax-rates/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/settings-tax-rates/hooks/preact-query.ts' },
  'solid-query': { output: './src/settings-tax-rates/hooks/solid-query.ts' },
  'vue-query': { output: './src/settings-tax-rates/hooks/vue-query.ts' },
  'svelte-query': { output: './src/settings-tax-rates/hooks/svelte-query.ts' },
  'angular-query': { output: './src/settings-tax-rates/hooks/angular-query.ts' },
  docs: {
    output: './src/settings-tax-rates/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
