import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Listings/Rollouts/321895/2026-09/listings.json',
  output: './src/crm-listings/routes.ts',
  docs: {
    output: './src/crm-listings/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
