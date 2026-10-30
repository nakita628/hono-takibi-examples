import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CMS/Tags/Rollouts/635/2026-09/tags.json',
  output: './src/cms-tags/routes.ts',
  docs: {
    output: './src/cms-tags/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
