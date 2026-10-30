import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Leads/Rollouts/321895/2026-09/leads.json',
  output: './src/crm-leads/routes.ts',
  docs: {
    output: './src/crm-leads/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
