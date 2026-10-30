import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Files/Files/Rollouts/319002/2026-09/files.json',
  output: './src/files-files/routes.ts',
  docs: {
    output: './src/files-files/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
