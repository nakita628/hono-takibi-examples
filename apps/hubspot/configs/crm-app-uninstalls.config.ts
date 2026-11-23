import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/App%20Uninstalls/Rollouts/209039/2026-09/appUninstalls.json',
  output: './src/crm-app-uninstalls/routes.ts',
  template: {},
  type: { output: './src/crm-app-uninstalls/types.ts' },
  client: { output: './src/crm-app-uninstalls/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-app-uninstalls/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-app-uninstalls/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-app-uninstalls/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-app-uninstalls/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-app-uninstalls/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-app-uninstalls/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-app-uninstalls/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-app-uninstalls/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-app-uninstalls/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
