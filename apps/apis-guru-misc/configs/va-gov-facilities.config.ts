import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/va.gov/facilities/0.0.1/openapi.yaml',
  output: './src/va-gov-facilities/routes.ts',
  docs: {
    output: './src/va-gov-facilities/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
