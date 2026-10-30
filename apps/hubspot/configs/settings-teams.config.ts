import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Settings/Teams/Rollouts/325899/2026-09/teams.json',
  output: './src/settings-teams/routes.ts',
  docs: {
    output: './src/settings-teams/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
