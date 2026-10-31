import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/bigquery/v2/openapi.yaml',
  output: './src/bigquery/routes.ts',
  docs: {
    output: './src/bigquery/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
