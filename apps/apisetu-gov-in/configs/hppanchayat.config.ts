import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/hppanchayat/3.0.0/openapi.yaml',
  output: './src/hppanchayat/routes.ts',
  docs: {
    output: './src/hppanchayat/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
