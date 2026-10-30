import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Tickets/Rollouts/321895/2026-09/tickets.json',
  output: './src/crm-tickets/routes.ts',
  docs: {
    output: './src/crm-tickets/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
