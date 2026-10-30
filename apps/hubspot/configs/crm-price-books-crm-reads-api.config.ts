import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Price%20Books%20Crm%20Reads%20Api/Rollouts/310989/2026-09/priceBooksCrmReadsApi.json',
  output: './src/crm-price-books-crm-reads-api/routes.ts',
  docs: {
    output: './src/crm-price-books-crm-reads-api/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
