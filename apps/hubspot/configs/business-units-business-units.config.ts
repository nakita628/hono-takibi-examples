import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Business%20Units/Business%20Units/Rollouts/140946/2026-09/businessUnits.json',
  output: './src/business-units-business-units/routes.ts',
  docs: {
    output: './src/business-units-business-units/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
