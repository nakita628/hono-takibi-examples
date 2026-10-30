import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Taxes/Rollouts/321895/2026-09/taxes.json',
  output: './src/crm-taxes/routes.ts',
  docs: {
    output: './src/crm-taxes/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
