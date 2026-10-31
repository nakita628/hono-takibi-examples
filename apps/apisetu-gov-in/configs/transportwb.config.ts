import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportwb/3.0.0/openapi.yaml',
  output: './src/transportwb/routes.ts',
  docs: {
    output: './src/transportwb/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
