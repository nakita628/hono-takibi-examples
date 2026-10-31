import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportga/3.0.0/openapi.yaml',
  output: './src/transportga/routes.ts',
  docs: {
    output: './src/transportga/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
