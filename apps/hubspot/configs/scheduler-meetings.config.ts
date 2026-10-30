import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Scheduler/Meetings/Rollouts/177892/2026-09/meetings.json',
  output: './src/scheduler-meetings/routes.ts',
  docs: {
    output: './src/scheduler-meetings/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
