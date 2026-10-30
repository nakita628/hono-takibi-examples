import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Schemas/Rollouts/145900/2026-09/schemas.json',
  output: './src/crm-schemas/routes.ts',
  docs: {
    output: './src/crm-schemas/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
