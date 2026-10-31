import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/capabilities/v1/feature_flags.openapi.yaml',
  output: './src/capabilities-v1-feature-flags/routes.ts',
  docs: {
    output: './src/capabilities-v1-feature-flags/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
