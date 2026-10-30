import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CMS/Hubdb/Rollouts/243927/2026-09/hubdb.json',
  output: './src/cms-hubdb/routes.ts',
  docs: {
    output: './src/cms-hubdb/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
