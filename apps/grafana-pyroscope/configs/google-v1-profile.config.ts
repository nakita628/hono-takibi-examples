import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/google/v1/profile.openapi.yaml',
  output: './src/google-v1-profile/routes.ts',
  docs: {
    output: './src/google-v1-profile/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
