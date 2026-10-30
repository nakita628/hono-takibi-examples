import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Commerce/Payment%20Links/Rollouts/310885/2026-09/paymentLinks.json',
  output: './src/commerce-payment-links/routes.ts',
  docs: {
    output: './src/commerce-payment-links/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
