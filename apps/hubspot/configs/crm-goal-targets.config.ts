import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Goal%20Targets/Rollouts/321895/2026-09/goalTargets.json',
  output: './src/crm-goal-targets/routes.ts',
  docs: {
    output: './src/crm-goal-targets/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
