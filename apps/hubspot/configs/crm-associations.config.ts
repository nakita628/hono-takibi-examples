import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Associations/Rollouts/321895/2026-09/associations.json',
  output: './src/crm-associations/routes.ts',
  docs: {
    output: './src/crm-associations/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
