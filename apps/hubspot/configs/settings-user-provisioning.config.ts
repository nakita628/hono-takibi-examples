import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Settings/User%20Provisioning/Rollouts/325901/2026-09/userProvisioning.json',
  output: './src/settings-user-provisioning/routes.ts',
  docs: {
    output: './src/settings-user-provisioning/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
