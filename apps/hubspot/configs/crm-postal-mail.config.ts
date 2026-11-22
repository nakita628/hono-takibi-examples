import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Postal%20Mail/Rollouts/321895/2026-09/postalMail.json',
  output: './src/crm-postal-mail/routes.ts',
  template: {},
  type: { output: './src/crm-postal-mail/types.ts' },
  client: { output: './src/crm-postal-mail/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-postal-mail/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-postal-mail/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-postal-mail/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-postal-mail/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-postal-mail/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-postal-mail/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-postal-mail/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-postal-mail/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-postal-mail/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
