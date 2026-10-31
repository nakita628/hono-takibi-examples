import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/chennaicorp/3.0.0/openapi.yaml',
  output: './src/chennaicorp/routes.ts',
  docs: {
    output: './src/chennaicorp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
