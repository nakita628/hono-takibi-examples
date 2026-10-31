import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/jharsewa/3.0.0/openapi.yaml',
  output: './src/jharsewa/routes.ts',
  docs: {
    output: './src/jharsewa/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
