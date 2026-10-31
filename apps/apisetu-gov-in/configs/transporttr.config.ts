import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transporttr/3.0.0/openapi.yaml',
  output: './src/transporttr/routes.ts',
  docs: {
    output: './src/transporttr/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
