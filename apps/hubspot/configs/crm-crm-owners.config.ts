import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Crm%20Owners/Rollouts/146888/2026-09/crmOwners.json',
  output: './src/crm-crm-owners/routes.ts',
  docs: {
    output: './src/crm-crm-owners/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
