import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Marketing/Marketing%20Emails/Rollouts/145892/2026-09/marketingEmails.json',
  output: './src/marketing-marketing-emails/routes.ts',
  docs: {
    output: './src/marketing-marketing-emails/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
