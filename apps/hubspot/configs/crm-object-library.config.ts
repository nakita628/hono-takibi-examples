import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Object%20Library/Rollouts/196908/2026-09/objectLibrary.json',
  output: './src/crm-object-library/routes.ts',
  docs: {
    output: './src/crm-object-library/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
