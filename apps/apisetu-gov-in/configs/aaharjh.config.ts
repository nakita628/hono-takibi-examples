import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/aaharjh/3.0.0/openapi.yaml',
  output: './src/aaharjh/routes.ts',
  docs: {
    output: './src/aaharjh/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
