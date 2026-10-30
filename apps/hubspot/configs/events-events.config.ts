import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Events/Events/Rollouts/147897/2026-09/events.json',
  output: './src/events-events/routes.ts',
  docs: {
    output: './src/events-events/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
