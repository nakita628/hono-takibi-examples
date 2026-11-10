import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // dbt Cloud API v3, official OpenAPI spec:
  // https://github.com/dbt-labs/dbt-cloud-openapi-spec/blob/f2ab6fd6325f672d39a4f5d6d18536a646d97d27/openapi-v3.yaml
  input:
    'https://raw.githubusercontent.com/dbt-labs/dbt-cloud-openapi-spec/master/openapi-v3.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://cloud.getdbt.com',
  },
})
