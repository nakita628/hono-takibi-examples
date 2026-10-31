import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/status/v1/status.openapi.yaml',
  output: './src/status-v1-status/routes.ts',
  docs: {
    output: './src/status-v1-status/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
