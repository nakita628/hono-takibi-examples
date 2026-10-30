import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Events/Manage%20Event%20Definitions/Rollouts/138888/2026-09/manageEventDefinitions.json',
  output: './src/events-manage-event-definitions/routes.ts',
  docs: {
    output: './src/events-manage-event-definitions/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
