import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/pgimer/3.0.0/openapi.yaml',
  output: './src/pgimer/routes.ts',
  docs: {
    output: './src/pgimer/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
