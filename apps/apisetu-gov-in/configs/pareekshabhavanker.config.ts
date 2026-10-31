import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/pareekshabhavanker/3.0.0/openapi.yaml',
  output: './src/pareekshabhavanker/routes.ts',
  docs: {
    output: './src/pareekshabhavanker/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
