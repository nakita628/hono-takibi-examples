import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Property%20Validations/Rollouts/215885/2026-09/propertyValidations.json',
  output: './src/crm-property-validations/routes.ts',
  template: {},
  type: { output: './src/crm-property-validations/types.ts' },
  client: { output: './src/crm-property-validations/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-property-validations/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-property-validations/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-property-validations/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-property-validations/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-property-validations/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-property-validations/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-property-validations/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-property-validations/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-property-validations/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
