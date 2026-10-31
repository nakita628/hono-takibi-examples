import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/segmentwriter/v1/push.openapi.yaml',
  output: './src/segmentwriter-v1-push/routes.ts',
  docs: {
    output: './src/segmentwriter-v1-push/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
