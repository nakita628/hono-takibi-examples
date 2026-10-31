import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportod/3.0.0/openapi.yaml',
  output: './src/transportod/routes.ts',
  docs: {
    output: './src/transportod/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
