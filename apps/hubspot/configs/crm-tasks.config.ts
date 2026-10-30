import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Tasks/Rollouts/321895/2026-09/tasks.json',
  output: './src/crm-tasks/routes.ts',
  docs: {
    output: './src/crm-tasks/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
