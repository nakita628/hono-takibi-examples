import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/kotakgeneralinsurance/3.0.0/openapi.yaml',
  output: './src/kotakgeneralinsurance/routes.ts',
  docs: {
    output: './src/kotakgeneralinsurance/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
