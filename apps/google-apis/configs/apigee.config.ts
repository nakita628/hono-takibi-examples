import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/apigee/v1/openapi.yaml',
  output: './src/apigee/routes.ts',
  docs: {
    output: './src/apigee/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
