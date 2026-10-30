import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Notetaker%20Conversation%20Recap/Rollouts/321956/2026-09/notetakerConversationRecap.json',
  output: './src/crm-notetaker-conversation-recap/routes.ts',
  docs: {
    output: './src/crm-notetaker-conversation-recap/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
