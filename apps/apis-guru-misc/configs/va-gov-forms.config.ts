import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/va.gov/forms/0.0.0/openapi.yaml',
  output: './src/va-gov-forms/routes.ts',
  docs: {
    output: './src/va-gov-forms/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
