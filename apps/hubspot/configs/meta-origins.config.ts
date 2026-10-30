import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Meta/Origins/Rollouts/302900/2026-09/origins.json',
  output: './src/meta-origins/routes.ts',
  docs: {
    output: './src/meta-origins/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
