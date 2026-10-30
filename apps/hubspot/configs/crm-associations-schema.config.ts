import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Associations%20Schema/Rollouts/130902/2026-09/associationsSchema.json',
  output: './src/crm-associations-schema/routes.ts',
  docs: {
    output: './src/crm-associations-schema/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
