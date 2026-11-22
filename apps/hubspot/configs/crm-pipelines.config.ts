import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Pipelines/Rollouts/145896/2026-09/pipelines.json',
  output: './src/crm-pipelines/routes.ts',
  template: {},
  type: { output: './src/crm-pipelines/types.ts' },
  client: { output: './src/crm-pipelines/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-pipelines/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-pipelines/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-pipelines/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-pipelines/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-pipelines/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-pipelines/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-pipelines/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-pipelines/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-pipelines/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
