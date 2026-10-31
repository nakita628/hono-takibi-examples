import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/gauhati/3.0.0/openapi.yaml',
  output: './src/gauhati/routes.ts',
  docs: {
    output: './src/gauhati/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
