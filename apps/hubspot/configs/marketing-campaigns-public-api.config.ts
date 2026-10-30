import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Marketing/Campaigns%20Public%20Api/Rollouts/310984/2026-09/campaignsPublicApi.json',
  output: './src/marketing-campaigns-public-api/routes.ts',
  docs: {
    output: './src/marketing-campaigns-public-api/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
