import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Commerce%20Payments/Rollouts/321895/2026-09/commercePayments.json',
  output: './src/crm-commerce-payments/routes.ts',
  docs: {
    output: './src/crm-commerce-payments/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
