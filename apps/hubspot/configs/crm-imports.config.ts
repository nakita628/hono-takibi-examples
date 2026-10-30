import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Imports/Rollouts/144903/2026-09/imports.json',
  output: './src/crm-imports/routes.ts',
  docs: {
    output: './src/crm-imports/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
