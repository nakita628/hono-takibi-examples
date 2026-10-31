import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/pdfbroker.io/v1/openapi.yaml',
  output: './src/pdfbroker-io/routes.ts',
  docs: {
    output: './src/pdfbroker-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
