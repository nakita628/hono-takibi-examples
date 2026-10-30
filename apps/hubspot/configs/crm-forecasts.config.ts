import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Forecasts/Rollouts/260892/2026-09/forecasts.json',
  output: './src/crm-forecasts/routes.ts',
  docs: {
    output: './src/crm-forecasts/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
