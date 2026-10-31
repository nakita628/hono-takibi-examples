import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportsk/3.0.0/openapi.yaml',
  output: './src/transportsk/routes.ts',
  docs: {
    output: './src/transportsk/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
