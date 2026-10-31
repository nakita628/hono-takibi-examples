import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/sendgrid.com/1.0.0/openapi.yaml',
  output: './src/sendgrid/routes.ts',
  docs: {
    output: './src/sendgrid/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
