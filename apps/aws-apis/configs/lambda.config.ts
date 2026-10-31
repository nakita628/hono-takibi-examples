import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/lambda/2015-03-31/openapi.yaml',
  output: './src/lambda/routes.ts',
  docs: {
    output: './src/lambda/api.md',
    curl: true,
    baseUrl: 'https://lambda.us-east-1.amazonaws.com',
  },
})
