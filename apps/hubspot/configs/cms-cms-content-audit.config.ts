import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CMS/Cms%20Content%20Audit/Rollouts/144888/2026-09/cmsContentAudit.json',
  output: './src/cms-cms-content-audit/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/cms-cms-content-audit/types.ts' },
  client: { output: './src/cms-cms-content-audit/client.ts', baseUrl: '/' },
  rpc: { output: './src/cms-cms-content-audit/rpc.ts', parseResponse: true },
  swr: { output: './src/cms-cms-content-audit/hooks/swr.ts' },
  'tanstack-query': { output: './src/cms-cms-content-audit/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cms-cms-content-audit/hooks/preact-query.ts' },
  'solid-query': { output: './src/cms-cms-content-audit/hooks/solid-query.ts' },
  'vue-query': { output: './src/cms-cms-content-audit/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cms-cms-content-audit/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cms-cms-content-audit/hooks/angular-query.ts' },
  docs: {
    output: './src/cms-cms-content-audit/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
