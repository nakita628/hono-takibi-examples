import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Pipeline%20Governance/Rollouts/320924/2026-09/pipelineGovernance.json',
  output: './src/crm-pipeline-governance/routes.ts',
  docs: {
    output: './src/crm-pipeline-governance/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
