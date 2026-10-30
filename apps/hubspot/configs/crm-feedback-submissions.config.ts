import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Feedback%20Submissions/Rollouts/321895/2026-09/feedbackSubmissions.json',
  output: './src/crm-feedback-submissions/routes.ts',
  docs: {
    output: './src/crm-feedback-submissions/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
