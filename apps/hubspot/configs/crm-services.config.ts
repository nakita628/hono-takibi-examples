import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Services/Rollouts/321895/2026-09/services.json',
  output: './src/crm-services/routes.ts',
  docs: {
    output: './src/crm-services/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
