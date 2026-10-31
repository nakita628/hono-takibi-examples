import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/pseb/3.0.0/openapi.yaml',
  output: './src/pseb/routes.ts',
  docs: {
    output: './src/pseb/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
