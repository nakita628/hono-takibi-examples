import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Automation/Actions%20V4/Rollouts/148901/2026-09/actionsV4.json',
  output: './src/automation-actions-v4/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/automation-actions-v4/types.ts' },
  client: { output: './src/automation-actions-v4/client.ts', baseUrl: '/' },
  rpc: { output: './src/automation-actions-v4/rpc.ts', parseResponse: true },
  swr: { output: './src/automation-actions-v4/hooks/swr.ts' },
  'tanstack-query': { output: './src/automation-actions-v4/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/automation-actions-v4/hooks/preact-query.ts' },
  'solid-query': { output: './src/automation-actions-v4/hooks/solid-query.ts' },
  'vue-query': { output: './src/automation-actions-v4/hooks/vue-query.ts' },
  'svelte-query': { output: './src/automation-actions-v4/hooks/svelte-query.ts' },
  'angular-query': { output: './src/automation-actions-v4/hooks/angular-query.ts' },
  docs: {
    output: './src/automation-actions-v4/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
