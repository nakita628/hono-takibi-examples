import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Companies/Rollouts/321895/2026-09/companies.json',
  output: './src/crm-companies/routes.ts',
  docs: {
    output: './src/crm-companies/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
