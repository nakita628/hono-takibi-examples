import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/sqs/2012-11-05/openapi.yaml',
  output: './src/sqs/routes.ts',
  docs: {
    output: './src/sqs/api.md',
    curl: true,
    baseUrl: 'https://sqs.us-east-1.amazonaws.com',
  },
})
