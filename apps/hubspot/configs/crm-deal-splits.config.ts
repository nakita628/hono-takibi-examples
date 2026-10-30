import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Deal%20Splits/Rollouts/157885/2026-09/dealSplits.json',
  output: './src/crm-deal-splits/routes.ts',
  docs: {
    output: './src/crm-deal-splits/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
