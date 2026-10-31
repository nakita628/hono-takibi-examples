import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportmp/3.0.0/openapi.yaml',
  output: './src/transportmp/routes.ts',
  docs: {
    output: './src/transportmp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
