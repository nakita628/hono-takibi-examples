import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Conversations/Conversations/Rollouts/338925/2026-09/conversations.json',
  output: './src/conversations-conversations/routes.ts',
  docs: {
    output: './src/conversations-conversations/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
