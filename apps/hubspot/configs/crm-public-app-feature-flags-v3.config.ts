import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Public%20App%20Feature%20Flags%20V3/Rollouts/195919/2026-09/publicAppFeatureFlagsV3.json',
  output: './src/crm-public-app-feature-flags-v3/routes.ts',
  docs: {
    output: './src/crm-public-app-feature-flags-v3/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
