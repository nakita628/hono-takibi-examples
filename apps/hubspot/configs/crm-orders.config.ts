import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Orders/Rollouts/321895/2026-09/orders.json',
  output: './src/crm-orders/routes.ts',
  docs: {
    output: './src/crm-orders/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
