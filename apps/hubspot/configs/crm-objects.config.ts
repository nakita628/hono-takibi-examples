import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Objects/Rollouts/424/2026-09/objects.json',
  output: './src/crm-objects/routes.ts',
  docs: {
    output: './src/crm-objects/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
