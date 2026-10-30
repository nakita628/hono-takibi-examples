import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CMS/Url%20Mappings/Rollouts/149915/2026-09/urlMappings.json',
  output: './src/cms-url-mappings/routes.ts',
  docs: {
    output: './src/cms-url-mappings/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
