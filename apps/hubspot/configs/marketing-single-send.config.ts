import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Marketing/Single-send/Rollouts/106894/2026-09/singlesend.json',
  output: './src/marketing-single-send/routes.ts',
  docs: {
    output: './src/marketing-single-send/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
