import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Account/Audit%20Logs/Rollouts/144923/2026-09/auditLogs.json',
  output: './src/account-audit-logs/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/account-audit-logs/types.ts' },
  client: { output: './src/account-audit-logs/client.ts', baseUrl: '/' },
  rpc: { output: './src/account-audit-logs/rpc.ts', parseResponse: true },
  swr: { output: './src/account-audit-logs/hooks/swr.ts' },
  'tanstack-query': { output: './src/account-audit-logs/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/account-audit-logs/hooks/preact-query.ts' },
  'solid-query': { output: './src/account-audit-logs/hooks/solid-query.ts' },
  'vue-query': { output: './src/account-audit-logs/hooks/vue-query.ts' },
  'svelte-query': { output: './src/account-audit-logs/hooks/svelte-query.ts' },
  'angular-query': { output: './src/account-audit-logs/hooks/angular-query.ts' },
  docs: {
    output: './src/account-audit-logs/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
