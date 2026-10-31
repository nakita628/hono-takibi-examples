import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/municipaladmin/3.0.0/openapi.yaml',
  output: './src/municipaladmin/routes.ts',
  docs: {
    output: './src/municipaladmin/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
