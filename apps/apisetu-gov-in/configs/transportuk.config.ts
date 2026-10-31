import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportuk/3.0.0/openapi.yaml',
  output: './src/transportuk/routes.ts',
  docs: {
    output: './src/transportuk/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
