import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Settings/Tax%20Rates/Rollouts/207908/2026-09/taxRates.json',
  output: './src/settings-tax-rates/routes.ts',
  docs: {
    output: './src/settings-tax-rates/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
