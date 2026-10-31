import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/nitp/3.0.0/openapi.yaml',
  output: './src/nitp/routes.ts',
  docs: {
    output: './src/nitp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
