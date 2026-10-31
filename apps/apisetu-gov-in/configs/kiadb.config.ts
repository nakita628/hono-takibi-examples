import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/kiadb/3.0.0/openapi.yaml',
  output: './src/kiadb/routes.ts',
  docs: {
    output: './src/kiadb/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
