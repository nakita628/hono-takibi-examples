import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/bhavishya/3.0.0/openapi.yaml',
  output: './src/bhavishya/routes.ts',
  docs: {
    output: './src/bhavishya/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
