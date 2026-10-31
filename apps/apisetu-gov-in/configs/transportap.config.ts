import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportap/3.0.0/openapi.yaml',
  output: './src/transportap/routes.ts',
  docs: {
    output: './src/transportap/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
