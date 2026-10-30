import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Emails/Rollouts/321895/2026-09/emails.json',
  output: './src/crm-emails/routes.ts',
  docs: {
    output: './src/crm-emails/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
