import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/apmcservices/3.0.0/openapi.yaml',
  output: './src/apmcservices/routes.ts',
  docs: {
    output: './src/apmcservices/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
