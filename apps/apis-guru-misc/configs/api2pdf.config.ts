import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/api2pdf.com/1.0.0/openapi.yaml',
  output: './src/api2pdf/routes.ts',
  docs: {
    output: './src/api2pdf/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
