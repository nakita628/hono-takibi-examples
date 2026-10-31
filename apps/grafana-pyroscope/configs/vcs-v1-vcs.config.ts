import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/vcs/v1/vcs.openapi.yaml',
  output: './src/vcs-v1-vcs/routes.ts',
  docs: {
    output: './src/vcs-v1-vcs/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
