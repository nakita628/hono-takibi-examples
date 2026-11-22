import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CMS/Authors/Rollouts/635/2026-09/authors.json',
  output: './src/cms-authors/routes.ts',
  template: {},
  type: { output: './src/cms-authors/types.ts' },
  client: { output: './src/cms-authors/client.ts', baseUrl: '/' },
  rpc: { output: './src/cms-authors/rpc.ts', parseResponse: true },
  swr: { output: './src/cms-authors/hooks/swr.ts' },
  'tanstack-query': { output: './src/cms-authors/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cms-authors/hooks/preact-query.ts' },
  'solid-query': { output: './src/cms-authors/hooks/solid-query.ts' },
  'vue-query': { output: './src/cms-authors/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cms-authors/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cms-authors/hooks/angular-query.ts' },
  docs: {
    output: './src/cms-authors/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
