import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Lists/Rollouts/327894/2026-09/lists.json',
  output: './src/crm-lists/routes.ts',
  docs: {
    output: './src/crm-lists/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
