import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/query/v1/query.openapi.yaml',
  output: './src/query-v1-query/routes.ts',
  docs: {
    output: './src/query-v1-query/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
