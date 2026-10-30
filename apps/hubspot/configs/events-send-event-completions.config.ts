import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Events/Send%20Event%20Completions/Rollouts/669/2026-09/sendEventCompletions.json',
  output: './src/events-send-event-completions/routes.ts',
  docs: {
    output: './src/events-send-event-completions/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
