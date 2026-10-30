import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Commerce/Paymentsaccounts/Rollouts/320893/2026-09/paymentsaccounts.json',
  output: './src/commerce-paymentsaccounts/routes.ts',
  docs: {
    output: './src/commerce-paymentsaccounts/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
