import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/apigateway/v1alpha2/openapi.yaml',
  output: './src/apigateway/routes.ts',
  docs: {
    output: './src/apigateway/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
