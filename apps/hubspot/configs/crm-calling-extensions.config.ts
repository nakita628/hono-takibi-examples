import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Calling%20Extensions/Rollouts/145891/2026-09/callingExtensions.json',
  output: './src/crm-calling-extensions/routes.ts',
  template: {},
  type: { output: './src/crm-calling-extensions/types.ts' },
  client: { output: './src/crm-calling-extensions/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-calling-extensions/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-calling-extensions/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-calling-extensions/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-calling-extensions/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-calling-extensions/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-calling-extensions/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-calling-extensions/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-calling-extensions/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-calling-extensions/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
