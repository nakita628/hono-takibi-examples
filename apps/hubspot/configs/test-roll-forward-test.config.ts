import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Test/Roll%20Forward%20Test/Rollouts/260892/2026-09/rollForwardTest.json',
  output: './src/test-roll-forward-test/routes.ts',
  docs: {
    output: './src/test-roll-forward-test/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
