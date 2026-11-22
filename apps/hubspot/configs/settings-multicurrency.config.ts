import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Settings/Multicurrency/Rollouts/145897/2026-09/multicurrency.json',
  output: './src/settings-multicurrency/routes.ts',
  template: {},
  type: { output: './src/settings-multicurrency/types.ts' },
  client: { output: './src/settings-multicurrency/client.ts', baseUrl: '/' },
  rpc: { output: './src/settings-multicurrency/rpc.ts', parseResponse: true },
  swr: { output: './src/settings-multicurrency/hooks/swr.ts' },
  'tanstack-query': { output: './src/settings-multicurrency/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/settings-multicurrency/hooks/preact-query.ts' },
  'solid-query': { output: './src/settings-multicurrency/hooks/solid-query.ts' },
  'vue-query': { output: './src/settings-multicurrency/hooks/vue-query.ts' },
  'svelte-query': { output: './src/settings-multicurrency/hooks/svelte-query.ts' },
  'angular-query': { output: './src/settings-multicurrency/hooks/angular-query.ts' },
  docs: {
    output: './src/settings-multicurrency/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
