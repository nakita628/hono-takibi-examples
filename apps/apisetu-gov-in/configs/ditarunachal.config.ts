import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/ditarunachal/3.0.0/openapi.yaml',
  output: './src/ditarunachal/routes.ts',
  docs: {
    output: './src/ditarunachal/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
