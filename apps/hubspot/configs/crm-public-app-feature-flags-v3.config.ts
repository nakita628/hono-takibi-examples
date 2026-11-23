import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Public%20App%20Feature%20Flags%20V3/Rollouts/195919/2026-09/publicAppFeatureFlagsV3.json',
  output: './src/crm-public-app-feature-flags-v3/routes.ts',
  template: {},
  type: { output: './src/crm-public-app-feature-flags-v3/types.ts' },
  client: { output: './src/crm-public-app-feature-flags-v3/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-public-app-feature-flags-v3/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-public-app-feature-flags-v3/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-public-app-feature-flags-v3/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-public-app-feature-flags-v3/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-public-app-feature-flags-v3/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-public-app-feature-flags-v3/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-public-app-feature-flags-v3/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-public-app-feature-flags-v3/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-public-app-feature-flags-v3/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
