import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/biharboard/3.0.0/openapi.yaml',
  output: './src/biharboard/routes.ts',
  docs: {
    output: './src/biharboard/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
