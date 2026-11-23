import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Courses/Rollouts/321895/2026-09/courses.json',
  output: './src/crm-courses/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-courses/types.ts' },
  client: { output: './src/crm-courses/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-courses/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-courses/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-courses/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-courses/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-courses/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-courses/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-courses/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-courses/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-courses/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
