import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/epramanhp/3.0.0/openapi.yaml',
  output: './src/epramanhp/routes.ts',
  docs: {
    output: './src/epramanhp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
