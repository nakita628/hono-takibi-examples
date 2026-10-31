import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/upmsp/3.0.0/openapi.yaml',
  output: './src/upmsp/routes.ts',
  docs: {
    output: './src/upmsp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
