import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/geetanjaliuniv/3.0.0/openapi.yaml',
  output: './src/geetanjaliuniv/routes.ts',
  docs: {
    output: './src/geetanjaliuniv/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
