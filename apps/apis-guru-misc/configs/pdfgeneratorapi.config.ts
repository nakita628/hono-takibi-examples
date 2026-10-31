import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/pdfgeneratorapi.com/3.1.1/openapi.yaml',
  output: './src/pdfgeneratorapi/routes.ts',
  docs: {
    output: './src/pdfgeneratorapi/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
