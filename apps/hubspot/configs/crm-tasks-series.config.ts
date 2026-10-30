import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Tasks%20Series/Rollouts/320937/2026-09/tasksSeries.json',
  output: './src/crm-tasks-series/routes.ts',
  docs: {
    output: './src/crm-tasks-series/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
