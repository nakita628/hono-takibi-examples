import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Emails/Rollouts/321895/2026-09/emails.json',
  output: './src/crm-emails/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-emails/types.ts' },
  client: { output: './src/crm-emails/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-emails/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-emails/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-emails/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-emails/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-emails/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-emails/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-emails/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-emails/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-emails/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
