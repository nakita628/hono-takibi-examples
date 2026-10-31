import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/landrecordskar/3.0.0/openapi.yaml',
  output: './src/landrecordskar/routes.ts',
  docs: {
    output: './src/landrecordskar/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
