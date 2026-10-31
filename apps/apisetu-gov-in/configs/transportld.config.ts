import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportld/3.0.0/openapi.yaml',
  output: './src/transportld/routes.ts',
  docs: {
    output: './src/transportld/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
