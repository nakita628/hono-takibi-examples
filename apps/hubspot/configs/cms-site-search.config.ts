import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CMS/Site%20Search/Rollouts/144890/2026-09/siteSearch.json',
  output: './src/cms-site-search/routes.ts',
  docs: {
    output: './src/cms-site-search/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
