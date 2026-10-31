import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/mriu/3.0.0/openapi.yaml',
  output: './src/mriu/routes.ts',
  docs: {
    output: './src/mriu/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
