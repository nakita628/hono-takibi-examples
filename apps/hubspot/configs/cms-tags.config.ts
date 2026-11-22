import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CMS/Tags/Rollouts/635/2026-09/tags.json',
  output: './src/cms-tags/routes.ts',
  template: {},
  type: { output: './src/cms-tags/types.ts' },
  client: { output: './src/cms-tags/client.ts', baseUrl: '/' },
  rpc: { output: './src/cms-tags/rpc.ts', parseResponse: true },
  swr: { output: './src/cms-tags/hooks/swr.ts' },
  'tanstack-query': { output: './src/cms-tags/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cms-tags/hooks/preact-query.ts' },
  'solid-query': { output: './src/cms-tags/hooks/solid-query.ts' },
  'vue-query': { output: './src/cms-tags/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cms-tags/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cms-tags/hooks/angular-query.ts' },
  docs: {
    output: './src/cms-tags/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
