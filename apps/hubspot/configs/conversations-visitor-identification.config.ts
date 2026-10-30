import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Conversations/Visitor%20Identification/Rollouts/140938/2026-09/visitorIdentification.json',
  output: './src/conversations-visitor-identification/routes.ts',
  docs: {
    output: './src/conversations-visitor-identification/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
