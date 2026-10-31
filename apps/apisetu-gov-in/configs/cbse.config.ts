import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/cbse/3.0.0/openapi.yaml',
  output: './src/cbse/routes.ts',
  docs: {
    output: './src/cbse/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
