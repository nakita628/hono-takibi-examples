import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/metastore/v1/index.openapi.yaml',
  output: './src/metastore-v1-index/routes.ts',
  docs: {
    output: './src/metastore-v1-index/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
