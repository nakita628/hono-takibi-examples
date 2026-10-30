import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Products/Rollouts/321895/2026-09/products.json',
  output: './src/crm-products/routes.ts',
  docs: {
    output: './src/crm-products/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
