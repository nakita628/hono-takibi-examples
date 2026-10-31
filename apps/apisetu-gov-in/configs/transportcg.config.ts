import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportcg/3.0.0/openapi.yaml',
  output: './src/transportcg/routes.ts',
  docs: {
    output: './src/transportcg/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
