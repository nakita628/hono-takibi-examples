import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Account/Account%20Info/Rollouts/318954/2026-09/accountInfo.json',
  output: './src/account-account-info/routes.ts',
  docs: {
    output: './src/account-account-info/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
