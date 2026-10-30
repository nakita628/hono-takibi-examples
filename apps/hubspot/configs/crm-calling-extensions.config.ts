import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Calling%20Extensions/Rollouts/145891/2026-09/callingExtensions.json',
  output: './src/crm-calling-extensions/routes.ts',
  docs: {
    output: './src/crm-calling-extensions/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
