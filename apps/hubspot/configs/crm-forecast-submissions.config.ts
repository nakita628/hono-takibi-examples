import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Forecast%20Submissions/Rollouts/260892/2026-09/forecastSubmissions.json',
  output: './src/crm-forecast-submissions/routes.ts',
  docs: {
    output: './src/crm-forecast-submissions/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
