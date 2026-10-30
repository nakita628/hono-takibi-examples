import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Exports/Rollouts/95922/2026-09/exports.json',
  output: './src/crm-exports/routes.ts',
  docs: {
    output: './src/crm-exports/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
