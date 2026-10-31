import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/bsehr/3.0.0/openapi.yaml',
  output: './src/bsehr/routes.ts',
  docs: {
    output: './src/bsehr/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
