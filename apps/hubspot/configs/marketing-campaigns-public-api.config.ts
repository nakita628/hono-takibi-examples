import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Marketing/Campaigns%20Public%20Api/Rollouts/310984/2026-09/campaignsPublicApi.json',
  output: './src/marketing-campaigns-public-api/routes.ts',
  template: {},
  type: { output: './src/marketing-campaigns-public-api/types.ts' },
  client: { output: './src/marketing-campaigns-public-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/marketing-campaigns-public-api/rpc.ts', parseResponse: true },
  swr: { output: './src/marketing-campaigns-public-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/marketing-campaigns-public-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/marketing-campaigns-public-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/marketing-campaigns-public-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/marketing-campaigns-public-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/marketing-campaigns-public-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/marketing-campaigns-public-api/hooks/angular-query.ts' },
  docs: {
    output: './src/marketing-campaigns-public-api/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
