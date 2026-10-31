import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/mcimindia/3.0.0/openapi.yaml',
  output: './src/mcimindia/routes.ts',
  docs: {
    output: './src/mcimindia/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
