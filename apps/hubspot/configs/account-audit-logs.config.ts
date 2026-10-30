import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Account/Audit%20Logs/Rollouts/144923/2026-09/auditLogs.json',
  output: './src/account-audit-logs/routes.ts',
  docs: {
    output: './src/account-audit-logs/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
