import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/igrmaharashtra/3.0.0/openapi.yaml',
  output: './src/igrmaharashtra/routes.ts',
  docs: {
    output: './src/igrmaharashtra/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
