import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/gmch/3.0.0/openapi.yaml',
  output: './src/gmch/routes.ts',
  docs: {
    output: './src/gmch/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
