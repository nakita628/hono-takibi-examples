import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Public%20App%20Crm%20Cards/Rollouts/147892/2026-09/publicAppCrmCards.json',
  output: './src/crm-public-app-crm-cards/routes.ts',
  docs: {
    output: './src/crm-public-app-crm-cards/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
