import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Carts/Rollouts/321895/2026-09/carts.json',
  output: './src/crm-carts/routes.ts',
  docs: {
    output: './src/crm-carts/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
