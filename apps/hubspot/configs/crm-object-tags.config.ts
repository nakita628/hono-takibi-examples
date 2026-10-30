import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Object%20Tags/Rollouts/320931/2026-09/objectTags.json',
  output: './src/crm-object-tags/routes.ts',
  docs: {
    output: './src/crm-object-tags/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
