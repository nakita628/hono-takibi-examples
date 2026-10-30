import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Contacts/Rollouts/321895/2026-09/contacts.json',
  output: './src/crm-contacts/routes.ts',
  docs: {
    output: './src/crm-contacts/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
