import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Object%20Library/Rollouts/196908/2026-09/objectLibrary.json',
  output: './src/crm-object-library/routes.ts',
  template: {},
  type: { output: './src/crm-object-library/types.ts' },
  client: { output: './src/crm-object-library/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-object-library/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-object-library/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-object-library/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-object-library/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-object-library/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-object-library/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-object-library/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-object-library/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-object-library/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
