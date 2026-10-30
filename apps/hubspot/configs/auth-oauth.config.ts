import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Auth/Oauth/Rollouts/279897/2026-09/oauth.json',
  output: './src/auth-oauth/routes.ts',
  docs: {
    output: './src/auth-oauth/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
