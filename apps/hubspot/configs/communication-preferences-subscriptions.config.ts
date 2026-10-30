import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Communication%20Preferences/Subscriptions/Rollouts/176901/2026-09/subscriptions.json',
  output: './src/communication-preferences-subscriptions/routes.ts',
  docs: {
    output: './src/communication-preferences-subscriptions/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
