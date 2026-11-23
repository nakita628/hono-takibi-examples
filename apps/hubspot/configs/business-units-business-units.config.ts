import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Business%20Units/Business%20Units/Rollouts/140946/2026-09/businessUnits.json',
  output: './src/business-units-business-units/routes.ts',
  template: {},
  type: { output: './src/business-units-business-units/types.ts' },
  client: { output: './src/business-units-business-units/client.ts', baseUrl: '/' },
  rpc: { output: './src/business-units-business-units/rpc.ts', parseResponse: true },
  swr: { output: './src/business-units-business-units/hooks/swr.ts' },
  'tanstack-query': { output: './src/business-units-business-units/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/business-units-business-units/hooks/preact-query.ts' },
  'solid-query': { output: './src/business-units-business-units/hooks/solid-query.ts' },
  'vue-query': { output: './src/business-units-business-units/hooks/vue-query.ts' },
  'svelte-query': { output: './src/business-units-business-units/hooks/svelte-query.ts' },
  'angular-query': { output: './src/business-units-business-units/hooks/angular-query.ts' },
  docs: {
    output: './src/business-units-business-units/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
