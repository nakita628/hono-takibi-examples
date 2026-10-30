import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Properties/Rollouts/145899/2026-09/properties.json',
  output: './src/crm-properties/routes.ts',
  docs: {
    output: './src/crm-properties/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
