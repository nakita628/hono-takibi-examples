import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Commerce%20Subscriptions/Rollouts/321895/2026-09/commerceSubscriptions.json',
  output: './src/crm-commerce-subscriptions/routes.ts',
  docs: {
    output: './src/crm-commerce-subscriptions/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
