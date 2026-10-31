import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/juit/3.0.0/openapi.yaml',
  output: './src/juit/routes.ts',
  docs: {
    output: './src/juit/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
