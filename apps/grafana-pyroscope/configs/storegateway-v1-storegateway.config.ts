import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/storegateway/v1/storegateway.openapi.yaml',
  output: './src/storegateway-v1-storegateway/routes.ts',
  docs: {
    output: './src/storegateway-v1-storegateway/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
