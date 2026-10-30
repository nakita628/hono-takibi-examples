import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Marketing/Marketing%20Events/Rollouts/129888/2026-09/marketingEvents.json',
  output: './src/marketing-marketing-events/routes.ts',
  docs: {
    output: './src/marketing-marketing-events/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
