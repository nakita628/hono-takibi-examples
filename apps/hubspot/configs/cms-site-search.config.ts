import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CMS/Site%20Search/Rollouts/144890/2026-09/siteSearch.json',
  output: './src/cms-site-search/routes.ts',
  template: {},
  type: { output: './src/cms-site-search/types.ts' },
  client: { output: './src/cms-site-search/client.ts', baseUrl: '/' },
  rpc: { output: './src/cms-site-search/rpc.ts', parseResponse: true },
  swr: { output: './src/cms-site-search/hooks/swr.ts' },
  'tanstack-query': { output: './src/cms-site-search/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cms-site-search/hooks/preact-query.ts' },
  'solid-query': { output: './src/cms-site-search/hooks/solid-query.ts' },
  'vue-query': { output: './src/cms-site-search/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cms-site-search/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cms-site-search/hooks/angular-query.ts' },
  docs: {
    output: './src/cms-site-search/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
