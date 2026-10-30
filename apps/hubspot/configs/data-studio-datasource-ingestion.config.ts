import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Data%20Studio/Datasource%20Ingestion/Rollouts/248886/2026-09/datasourceIngestion.json',
  output: './src/data-studio-datasource-ingestion/routes.ts',
  docs: {
    output: './src/data-studio-datasource-ingestion/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
