import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/dynamodb/2012-08-10/openapi.yaml',
  output: './src/dynamodb/routes.ts',
  docs: {
    output: './src/dynamodb/api.md',
    curl: true,
    baseUrl: 'https://dynamodb.us-east-1.amazonaws.com',
  },
})
