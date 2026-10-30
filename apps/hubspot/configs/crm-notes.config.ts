import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Notes/Rollouts/321895/2026-09/notes.json',
  output: './src/crm-notes/routes.ts',
  docs: {
    output: './src/crm-notes/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
