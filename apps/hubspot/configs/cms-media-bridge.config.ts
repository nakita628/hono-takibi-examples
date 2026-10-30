import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CMS/Media%20Bridge/Rollouts/787/2026-09/mediaBridge.json',
  output: './src/cms-media-bridge/routes.ts',
  docs: {
    output: './src/cms-media-bridge/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
