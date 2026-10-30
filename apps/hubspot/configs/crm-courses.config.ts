import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Courses/Rollouts/321895/2026-09/courses.json',
  output: './src/crm-courses/routes.ts',
  docs: {
    output: './src/crm-courses/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
