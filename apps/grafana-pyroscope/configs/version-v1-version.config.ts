import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/version/v1/version.openapi.yaml',
  output: './src/version-v1-version/routes.ts',
  docs: {
    output: './src/version-v1-version/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
