import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/niesbud/3.0.0/openapi.yaml',
  output: './src/niesbud/routes.ts',
  docs: {
    output: './src/niesbud/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
