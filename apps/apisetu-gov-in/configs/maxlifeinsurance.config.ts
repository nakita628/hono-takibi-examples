import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/maxlifeinsurance/3.0.0/openapi.yaml',
  output: './src/maxlifeinsurance/routes.ts',
  docs: {
    output: './src/maxlifeinsurance/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
