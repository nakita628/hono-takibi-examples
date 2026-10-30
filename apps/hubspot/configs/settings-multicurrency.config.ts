import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Settings/Multicurrency/Rollouts/145897/2026-09/multicurrency.json',
  output: './src/settings-multicurrency/routes.ts',
  docs: {
    output: './src/settings-multicurrency/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
