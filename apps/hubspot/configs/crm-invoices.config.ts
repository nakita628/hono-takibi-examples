import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Invoices/Rollouts/321895/2026-09/invoices.json',
  output: './src/crm-invoices/routes.ts',
  docs: {
    output: './src/crm-invoices/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
