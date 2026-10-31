import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/querier/v1/querier.openapi.yaml',
  output: './src/querier-v1-querier/routes.ts',
  docs: {
    output: './src/querier-v1-querier/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
