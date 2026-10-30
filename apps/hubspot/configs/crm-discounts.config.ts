import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Discounts/Rollouts/321895/2026-09/discounts.json',
  output: './src/crm-discounts/routes.ts',
  docs: {
    output: './src/crm-discounts/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
