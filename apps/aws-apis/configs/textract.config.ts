import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/textract/2018-06-27/openapi.yaml',
  output: './src/textract/routes.ts',
  docs: {
    output: './src/textract/api.md',
    curl: true,
    baseUrl: 'https://textract.us-east-1.amazonaws.com',
  },
})
