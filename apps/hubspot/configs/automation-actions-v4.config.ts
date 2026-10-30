import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Automation/Actions%20V4/Rollouts/148901/2026-09/actionsV4.json',
  output: './src/automation-actions-v4/routes.ts',
  docs: {
    output: './src/automation-actions-v4/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
