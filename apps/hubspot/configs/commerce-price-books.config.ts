import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Commerce/Price%20Books/Rollouts/310989/2026-09/priceBooks.json',
  output: './src/commerce-price-books/routes.ts',
  docs: {
    output: './src/commerce-price-books/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
