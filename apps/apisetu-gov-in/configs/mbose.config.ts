import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/mbose/3.0.0/openapi.yaml',
  output: './src/mbose/routes.ts',
  docs: {
    output: './src/mbose/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
