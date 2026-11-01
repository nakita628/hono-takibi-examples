import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/prometheus/prometheus/main/web/api/v1/testdata/openapi_3.1_golden.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'http://localhost:9090/api/v1',
  },
})
