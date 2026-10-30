import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Communications/Rollouts/321895/2026-09/communications.json',
  output: './src/crm-communications/routes.ts',
  docs: {
    output: './src/crm-communications/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
