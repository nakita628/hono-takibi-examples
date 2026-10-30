import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Video%20Conferencing%20Extension/Rollouts/148903/2026-09/videoConferencingExtension.json',
  output: './src/crm-video-conferencing-extension/routes.ts',
  docs: {
    output: './src/crm-video-conferencing-extension/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
