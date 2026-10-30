import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/App%20Uninstalls/Rollouts/209039/2026-09/appUninstalls.json',
  output: './src/crm-app-uninstalls/routes.ts',
  docs: {
    output: './src/crm-app-uninstalls/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
