import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Appointments/Rollouts/424/2026-09/appointments.json',
  output: './src/crm-appointments/routes.ts',
  template: {},
  type: { output: './src/crm-appointments/types.ts' },
  client: { output: './src/crm-appointments/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-appointments/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-appointments/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-appointments/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-appointments/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-appointments/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-appointments/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-appointments/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-appointments/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-appointments/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
