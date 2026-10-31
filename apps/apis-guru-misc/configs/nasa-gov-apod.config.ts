import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/nasa.gov/apod/1.0.0/openapi.yaml',
  output: './src/nasa-gov-apod/routes.ts',
  docs: {
    output: './src/nasa-gov-apod/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
