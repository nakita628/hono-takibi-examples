import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportkl/3.0.0/openapi.yaml',
  output: './src/transportkl/routes.ts',
  docs: {
    output: './src/transportkl/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
