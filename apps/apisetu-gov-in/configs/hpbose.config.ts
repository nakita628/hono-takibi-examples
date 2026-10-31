import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/hpbose/3.0.0/openapi.yaml',
  output: './src/hpbose/routes.ts',
  docs: {
    output: './src/hpbose/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
