import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/quickchart.io/1.0.0/openapi.yaml',
  output: './src/quickchart-io/routes.ts',
  docs: {
    output: './src/quickchart-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
