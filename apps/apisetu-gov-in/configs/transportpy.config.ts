import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportpy/3.0.0/openapi.yaml',
  output: './src/transportpy/routes.ts',
  docs: {
    output: './src/transportpy/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
