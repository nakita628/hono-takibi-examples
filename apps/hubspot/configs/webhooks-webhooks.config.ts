import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Webhooks/Webhooks/Rollouts/147891/2026-09/webhooks.json',
  output: './src/webhooks-webhooks/routes.ts',
  docs: {
    output: './src/webhooks-webhooks/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
