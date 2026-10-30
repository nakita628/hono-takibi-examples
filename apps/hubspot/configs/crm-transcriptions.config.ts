import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Transcriptions/Rollouts/178922/2026-09/transcriptions.json',
  output: './src/crm-transcriptions/routes.ts',
  docs: {
    output: './src/crm-transcriptions/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
