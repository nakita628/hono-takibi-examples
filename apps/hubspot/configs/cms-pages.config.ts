import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CMS/Pages/Rollouts/59888/2026-09/pages.json',
  output: './src/cms-pages/routes.ts',
  docs: {
    output: './src/cms-pages/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
