import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CMS/Pages/Rollouts/59888/2026-09/pages.json',
  output: './src/cms-pages/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/cms-pages/types.ts' },
  client: { output: './src/cms-pages/client.ts', baseUrl: '/' },
  rpc: { output: './src/cms-pages/rpc.ts', parseResponse: true },
  swr: { output: './src/cms-pages/hooks/swr.ts' },
  'tanstack-query': { output: './src/cms-pages/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cms-pages/hooks/preact-query.ts' },
  'solid-query': { output: './src/cms-pages/hooks/solid-query.ts' },
  'vue-query': { output: './src/cms-pages/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cms-pages/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cms-pages/hooks/angular-query.ts' },
  docs: {
    output: './src/cms-pages/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
