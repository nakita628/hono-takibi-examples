import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Forecast%20Types/Rollouts/260892/2026-09/forecastTypes.json',
  output: './src/crm-forecast-types/routes.ts',
  docs: {
    output: './src/crm-forecast-types/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
