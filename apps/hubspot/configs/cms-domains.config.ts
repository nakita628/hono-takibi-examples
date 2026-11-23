import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CMS/Domains/Rollouts/149894/2026-09/domains.json',
  output: './src/cms-domains/routes.ts',
  template: {},
  type: { output: './src/cms-domains/types.ts' },
  client: { output: './src/cms-domains/client.ts', baseUrl: '/' },
  rpc: { output: './src/cms-domains/rpc.ts', parseResponse: true },
  swr: { output: './src/cms-domains/hooks/swr.ts' },
  'tanstack-query': { output: './src/cms-domains/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cms-domains/hooks/preact-query.ts' },
  'solid-query': { output: './src/cms-domains/hooks/solid-query.ts' },
  'vue-query': { output: './src/cms-domains/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cms-domains/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cms-domains/hooks/angular-query.ts' },
  docs: {
    output: './src/cms-domains/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
