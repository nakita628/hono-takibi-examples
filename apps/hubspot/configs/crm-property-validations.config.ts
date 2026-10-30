import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Property%20Validations/Rollouts/215885/2026-09/propertyValidations.json',
  output: './src/crm-property-validations/routes.ts',
  docs: {
    output: './src/crm-property-validations/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
