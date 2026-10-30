import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Automation/Email%20Templates/Rollouts/321889/2026-09/emailTemplates.json',
  output: './src/automation-email-templates/routes.ts',
  docs: {
    output: './src/automation-email-templates/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
