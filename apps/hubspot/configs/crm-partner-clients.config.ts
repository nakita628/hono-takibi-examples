import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Partner%20Clients/Rollouts/321895/2026-09/partnerClients.json',
  output: './src/crm-partner-clients/routes.ts',
  docs: {
    output: './src/crm-partner-clients/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
