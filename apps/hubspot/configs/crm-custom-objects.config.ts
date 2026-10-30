import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Custom%20Objects/Rollouts/424/2026-09/customObjects.json',
  output: './src/crm-custom-objects/routes.ts',
  docs: {
    output: './src/crm-custom-objects/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
