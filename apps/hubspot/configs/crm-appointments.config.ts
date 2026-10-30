import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Appointments/Rollouts/424/2026-09/appointments.json',
  output: './src/crm-appointments/routes.ts',
  docs: {
    output: './src/crm-appointments/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
