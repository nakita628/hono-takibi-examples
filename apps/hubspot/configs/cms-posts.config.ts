import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CMS/Posts/Rollouts/635/2026-09/posts.json',
  output: './src/cms-posts/routes.ts',
  docs: {
    output: './src/cms-posts/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
