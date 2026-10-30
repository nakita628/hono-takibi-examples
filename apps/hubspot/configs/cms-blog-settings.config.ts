import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CMS/Blog%20Settings/Rollouts/635/2026-09/blogSettings.json',
  output: './src/cms-blog-settings/routes.ts',
  docs: {
    output: './src/cms-blog-settings/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
