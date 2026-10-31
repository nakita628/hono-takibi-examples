import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/healthcare.gov/1.0.0/openapi.yaml',
  output: './src/healthcare-gov/routes.ts',
  docs: {
    output: './src/healthcare-gov/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
