import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CMS/Url%20Redirects/Rollouts/149916/2026-09/urlRedirects.json',
  output: './src/cms-url-redirects/routes.ts',
  docs: {
    output: './src/cms-url-redirects/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
