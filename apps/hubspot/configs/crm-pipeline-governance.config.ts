import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Pipeline%20Governance/Rollouts/320924/2026-09/pipelineGovernance.json',
  output: './src/crm-pipeline-governance/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-pipeline-governance/types.ts' },
  client: { output: './src/crm-pipeline-governance/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-pipeline-governance/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-pipeline-governance/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-pipeline-governance/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-pipeline-governance/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-pipeline-governance/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-pipeline-governance/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-pipeline-governance/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-pipeline-governance/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-pipeline-governance/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
