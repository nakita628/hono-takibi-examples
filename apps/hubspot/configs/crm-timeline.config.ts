import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Timeline/Rollouts/147898/2026-09/timeline.json',
  output: './src/crm-timeline/routes.ts',
  docs: {
    output: './src/crm-timeline/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
