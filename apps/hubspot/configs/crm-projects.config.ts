import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Projects/Rollouts/321895/2026-09/projects.json',
  output: './src/crm-projects/routes.ts',
  docs: {
    output: './src/crm-projects/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
