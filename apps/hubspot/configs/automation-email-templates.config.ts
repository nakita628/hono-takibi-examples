import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Automation/Email%20Templates/Rollouts/321889/2026-09/emailTemplates.json',
  output: './src/automation-email-templates/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/automation-email-templates/types.ts' },
  client: { output: './src/automation-email-templates/client.ts', baseUrl: '/' },
  rpc: { output: './src/automation-email-templates/rpc.ts', parseResponse: true },
  swr: { output: './src/automation-email-templates/hooks/swr.ts' },
  'tanstack-query': { output: './src/automation-email-templates/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/automation-email-templates/hooks/preact-query.ts' },
  'solid-query': { output: './src/automation-email-templates/hooks/solid-query.ts' },
  'vue-query': { output: './src/automation-email-templates/hooks/vue-query.ts' },
  'svelte-query': { output: './src/automation-email-templates/hooks/svelte-query.ts' },
  'angular-query': { output: './src/automation-email-templates/hooks/angular-query.ts' },
  docs: {
    output: './src/automation-email-templates/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
