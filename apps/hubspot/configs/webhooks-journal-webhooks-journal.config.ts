import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Webhooks%20Journal/Webhooks%20Journal/Rollouts/284944/2026-09/webhooksJournal.json',
  output: './src/webhooks-journal-webhooks-journal/routes.ts',
  docs: {
    output: './src/webhooks-journal-webhooks-journal/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
