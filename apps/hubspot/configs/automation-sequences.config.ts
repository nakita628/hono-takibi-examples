import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Automation/Sequences/Rollouts/321890/2026-09/sequences.json',
  output: './src/automation-sequences/routes.ts',
  template: {},
  type: { output: './src/automation-sequences/types.ts' },
  client: { output: './src/automation-sequences/client.ts', baseUrl: '/' },
  rpc: { output: './src/automation-sequences/rpc.ts', parseResponse: true },
  swr: { output: './src/automation-sequences/hooks/swr.ts' },
  'tanstack-query': { output: './src/automation-sequences/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/automation-sequences/hooks/preact-query.ts' },
  'solid-query': { output: './src/automation-sequences/hooks/solid-query.ts' },
  'vue-query': { output: './src/automation-sequences/hooks/vue-query.ts' },
  'svelte-query': { output: './src/automation-sequences/hooks/svelte-query.ts' },
  'angular-query': { output: './src/automation-sequences/hooks/angular-query.ts' },
  docs: {
    output: './src/automation-sequences/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
