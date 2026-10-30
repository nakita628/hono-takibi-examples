import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Postal%20Mail/Rollouts/321895/2026-09/postalMail.json',
  output: './src/crm-postal-mail/routes.ts',
  docs: {
    output: './src/crm-postal-mail/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
