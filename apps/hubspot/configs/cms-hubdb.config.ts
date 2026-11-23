import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CMS/Hubdb/Rollouts/243927/2026-09/hubdb.json',
  output: './src/cms-hubdb/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/cms-hubdb/types.ts' },
  client: { output: './src/cms-hubdb/client.ts', baseUrl: '/' },
  rpc: { output: './src/cms-hubdb/rpc.ts', parseResponse: true },
  swr: { output: './src/cms-hubdb/hooks/swr.ts' },
  'tanstack-query': { output: './src/cms-hubdb/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cms-hubdb/hooks/preact-query.ts' },
  'solid-query': { output: './src/cms-hubdb/hooks/solid-query.ts' },
  'vue-query': { output: './src/cms-hubdb/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cms-hubdb/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cms-hubdb/hooks/angular-query.ts' },
  docs: {
    output: './src/cms-hubdb/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
