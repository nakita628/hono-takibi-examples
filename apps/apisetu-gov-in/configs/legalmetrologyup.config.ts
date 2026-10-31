import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/legalmetrologyup/3.0.0/openapi.yaml',
  output: './src/legalmetrologyup/routes.ts',
  docs: {
    output: './src/legalmetrologyup/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
