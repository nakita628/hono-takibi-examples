import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/ubseuk/3.0.0/openapi.yaml',
  output: './src/ubseuk/routes.ts',
  docs: {
    output: './src/ubseuk/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
