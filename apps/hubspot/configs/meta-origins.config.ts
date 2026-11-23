import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Meta/Origins/Rollouts/302900/2026-09/origins.json',
  output: './src/meta-origins/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/meta-origins/types.ts' },
  client: { output: './src/meta-origins/client.ts', baseUrl: '/' },
  rpc: { output: './src/meta-origins/rpc.ts', parseResponse: true },
  swr: { output: './src/meta-origins/hooks/swr.ts' },
  'tanstack-query': { output: './src/meta-origins/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/meta-origins/hooks/preact-query.ts' },
  'solid-query': { output: './src/meta-origins/hooks/solid-query.ts' },
  'vue-query': { output: './src/meta-origins/hooks/vue-query.ts' },
  'svelte-query': { output: './src/meta-origins/hooks/svelte-query.ts' },
  'angular-query': { output: './src/meta-origins/hooks/angular-query.ts' },
  docs: {
    output: './src/meta-origins/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
