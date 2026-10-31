import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/metastore/v1/compactor.openapi.yaml',
  output: './src/metastore-v1-compactor/routes.ts',
  docs: {
    output: './src/metastore-v1-compactor/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
