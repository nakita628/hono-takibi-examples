import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Conversations/Custom%20Channels/Rollouts/160898/2026-09/customChannels.json',
  output: './src/conversations-custom-channels/routes.ts',
  docs: {
    output: './src/conversations-custom-channels/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
