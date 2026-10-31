import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/aiimsrishikesh/3.0.0/openapi.yaml',
  output: './src/aiimsrishikesh/routes.ts',
  docs: {
    output: './src/aiimsrishikesh/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
