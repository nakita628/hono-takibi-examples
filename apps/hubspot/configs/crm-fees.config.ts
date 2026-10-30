import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Fees/Rollouts/321895/2026-09/fees.json',
  output: './src/crm-fees/routes.ts',
  docs: {
    output: './src/crm-fees/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
