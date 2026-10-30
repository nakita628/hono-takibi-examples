import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Limits%20Tracking/Rollouts/199890/2026-09/limitsTracking.json',
  output: './src/crm-limits-tracking/routes.ts',
  docs: {
    output: './src/crm-limits-tracking/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
