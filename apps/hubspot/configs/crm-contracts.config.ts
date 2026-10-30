import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Contracts/Rollouts/321895/2026-09/contracts.json',
  output: './src/crm-contracts/routes.ts',
  docs: {
    output: './src/crm-contracts/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
