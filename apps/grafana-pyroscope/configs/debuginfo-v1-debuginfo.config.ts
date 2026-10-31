import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/debuginfo/v1/debuginfo.openapi.yaml',
  output: './src/debuginfo-v1-debuginfo/routes.ts',
  docs: {
    output: './src/debuginfo-v1-debuginfo/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
