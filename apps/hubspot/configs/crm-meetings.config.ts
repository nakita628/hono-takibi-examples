import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Meetings/Rollouts/321895/2026-09/meetings.json',
  output: './src/crm-meetings/routes.ts',
  docs: {
    output: './src/crm-meetings/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
