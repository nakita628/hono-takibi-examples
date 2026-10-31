import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/tataaia/3.0.0/openapi.yaml',
  output: './src/tataaia/routes.ts',
  docs: {
    output: './src/tataaia/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
