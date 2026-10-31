import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportrj/3.0.0/openapi.yaml',
  output: './src/transportrj/routes.ts',
  docs: {
    output: './src/transportrj/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
