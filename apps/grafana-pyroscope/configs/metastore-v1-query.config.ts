import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/metastore/v1/query.openapi.yaml',
  output: './src/metastore-v1-query/routes.ts',
  docs: {
    output: './src/metastore-v1-query/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
