import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportgj/3.0.0/openapi.yaml',
  output: './src/transportgj/routes.ts',
  docs: {
    output: './src/transportgj/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
