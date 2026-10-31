import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/asrb/3.0.0/openapi.yaml',
  output: './src/asrb/routes.ts',
  docs: {
    output: './src/asrb/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
