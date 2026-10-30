import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Partner%20Services/Rollouts/321895/2026-09/partnerServices.json',
  output: './src/crm-partner-services/routes.ts',
  docs: {
    output: './src/crm-partner-services/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
