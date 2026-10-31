import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/apigateway/2015-07-09/openapi.yaml',
  output: './src/apigateway/routes.ts',
  docs: {
    output: './src/apigateway/api.md',
    curl: true,
    baseUrl: 'https://apigateway.us-east-1.amazonaws.com',
  },
})
