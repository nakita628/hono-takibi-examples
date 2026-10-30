import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Deals/Rollouts/321895/2026-09/deals.json',
  output: './src/crm-deals/routes.ts',
  docs: {
    output: './src/crm-deals/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
