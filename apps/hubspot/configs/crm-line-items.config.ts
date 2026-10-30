import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Line%20Items/Rollouts/321895/2026-09/lineItems.json',
  output: './src/crm-line-items/routes.ts',
  docs: {
    output: './src/crm-line-items/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
