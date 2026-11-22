import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Data%20Studio/Datasource%20Ingestion/Rollouts/248886/2026-09/datasourceIngestion.json',
  output: './src/data-studio-datasource-ingestion/routes.ts',
  template: {},
  type: { output: './src/data-studio-datasource-ingestion/types.ts' },
  client: { output: './src/data-studio-datasource-ingestion/client.ts', baseUrl: '/' },
  rpc: { output: './src/data-studio-datasource-ingestion/rpc.ts', parseResponse: true },
  swr: { output: './src/data-studio-datasource-ingestion/hooks/swr.ts' },
  'tanstack-query': { output: './src/data-studio-datasource-ingestion/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/data-studio-datasource-ingestion/hooks/preact-query.ts' },
  'solid-query': { output: './src/data-studio-datasource-ingestion/hooks/solid-query.ts' },
  'vue-query': { output: './src/data-studio-datasource-ingestion/hooks/vue-query.ts' },
  'svelte-query': { output: './src/data-studio-datasource-ingestion/hooks/svelte-query.ts' },
  'angular-query': { output: './src/data-studio-datasource-ingestion/hooks/angular-query.ts' },
  docs: {
    output: './src/data-studio-datasource-ingestion/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
