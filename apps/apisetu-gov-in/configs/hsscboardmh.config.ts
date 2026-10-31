import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/hsscboardmh/3.0.0/openapi.yaml',
  output: './src/hsscboardmh/routes.ts',
  docs: {
    output: './src/hsscboardmh/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
