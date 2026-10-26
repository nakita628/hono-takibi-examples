import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Datadog API v2 (DataDog/datadog-api-client-typescript)
  input: 'https://raw.githubusercontent.com/DataDog/datadog-api-client-typescript/master/.generator/schemas/v2/openapi.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.datadoghq.com',
  },
})
