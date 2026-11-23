import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Settings/Teams/Rollouts/325899/2026-09/teams.json',
  output: './src/settings-teams/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/settings-teams/types.ts' },
  client: { output: './src/settings-teams/client.ts', baseUrl: '/' },
  rpc: { output: './src/settings-teams/rpc.ts', parseResponse: true },
  swr: { output: './src/settings-teams/hooks/swr.ts' },
  'tanstack-query': { output: './src/settings-teams/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/settings-teams/hooks/preact-query.ts' },
  'solid-query': { output: './src/settings-teams/hooks/solid-query.ts' },
  'vue-query': { output: './src/settings-teams/hooks/vue-query.ts' },
  'svelte-query': { output: './src/settings-teams/hooks/svelte-query.ts' },
  'angular-query': { output: './src/settings-teams/hooks/angular-query.ts' },
  docs: {
    output: './src/settings-teams/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
