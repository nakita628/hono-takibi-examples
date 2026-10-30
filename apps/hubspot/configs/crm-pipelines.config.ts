import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Pipelines/Rollouts/145896/2026-09/pipelines.json',
  output: './src/crm-pipelines/routes.ts',
  docs: {
    output: './src/crm-pipelines/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
