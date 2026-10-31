import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/bajajallianz/3.0.0/openapi.yaml',
  output: './src/bajajallianz/routes.ts',
  docs: {
    output: './src/bajajallianz/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
