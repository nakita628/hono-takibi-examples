import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/influxdata.com/2.0.0/openapi.yaml',
  output: './src/influxdata/routes.ts',
  docs: {
    output: './src/influxdata/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
