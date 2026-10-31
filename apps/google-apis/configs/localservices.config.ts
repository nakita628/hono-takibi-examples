import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/localservices/v1/openapi.yaml',
  output: './src/localservices/routes.ts',
  docs: {
    output: './src/localservices/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
