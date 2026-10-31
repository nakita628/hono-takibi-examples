import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/ditch/3.0.0/openapi.yaml',
  output: './src/ditch/routes.ts',
  docs: {
    output: './src/ditch/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
