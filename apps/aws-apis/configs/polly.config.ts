import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/polly/2016-06-10/openapi.yaml',
  output: './src/polly/routes.ts',
  docs: {
    output: './src/polly/api.md',
    curl: true,
    baseUrl: 'https://polly.us-east-1.amazonaws.com',
  },
})
