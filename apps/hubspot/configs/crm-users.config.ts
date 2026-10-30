import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Users/Rollouts/321895/2026-09/users.json',
  output: './src/crm-users/routes.ts',
  docs: {
    output: './src/crm-users/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
