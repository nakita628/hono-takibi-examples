import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CMS/Authors/Rollouts/635/2026-09/authors.json',
  output: './src/cms-authors/routes.ts',
  docs: {
    output: './src/cms-authors/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
