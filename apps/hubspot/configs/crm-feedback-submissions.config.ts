import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Feedback%20Submissions/Rollouts/321895/2026-09/feedbackSubmissions.json',
  output: './src/crm-feedback-submissions/routes.ts',
  template: {},
  type: { output: './src/crm-feedback-submissions/types.ts' },
  client: { output: './src/crm-feedback-submissions/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-feedback-submissions/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-feedback-submissions/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-feedback-submissions/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-feedback-submissions/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-feedback-submissions/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-feedback-submissions/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-feedback-submissions/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-feedback-submissions/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-feedback-submissions/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
