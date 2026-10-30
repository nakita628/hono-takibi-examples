import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Calls/Rollouts/321895/2026-09/calls.json',
  output: './src/crm-calls/routes.ts',
  docs: {
    output: './src/crm-calls/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
