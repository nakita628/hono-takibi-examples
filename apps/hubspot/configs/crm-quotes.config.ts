import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Quotes/Rollouts/321895/2026-09/quotes.json',
  output: './src/crm-quotes/routes.ts',
  docs: {
    output: './src/crm-quotes/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
