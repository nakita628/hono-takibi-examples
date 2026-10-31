import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transporthr/3.0.0/openapi.yaml',
  output: './src/transporthr/routes.ts',
  docs: {
    output: './src/transporthr/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
