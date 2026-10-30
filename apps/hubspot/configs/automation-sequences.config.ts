import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Automation/Sequences/Rollouts/321890/2026-09/sequences.json',
  output: './src/automation-sequences/routes.ts',
  docs: {
    output: './src/automation-sequences/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
