import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/rajasthanrajeduboard/3.0.0/openapi.yaml',
  output: './src/rajasthanrajeduboard/routes.ts',
  docs: {
    output: './src/rajasthanrajeduboard/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
