import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/ingester/v1/ingester.openapi.yaml',
  output: './src/ingester-v1-ingester/routes.ts',
  docs: {
    output: './src/ingester-v1-ingester/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
