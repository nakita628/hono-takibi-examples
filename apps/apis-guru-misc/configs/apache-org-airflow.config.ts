import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apache.org/airflow/2.5.1/openapi.yaml',
  output: './src/apache-org-airflow/routes.ts',
  docs: {
    output: './src/apache-org-airflow/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
