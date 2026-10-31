import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportbr/3.0.0/openapi.yaml',
  output: './src/transportbr/routes.ts',
  docs: {
    output: './src/transportbr/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
