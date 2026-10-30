import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CMS/Domains/Rollouts/149894/2026-09/domains.json',
  output: './src/cms-domains/routes.ts',
  docs: {
    output: './src/cms-domains/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
