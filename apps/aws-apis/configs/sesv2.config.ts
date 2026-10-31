import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/sesv2/2019-09-27/openapi.yaml',
  output: './src/sesv2/routes.ts',
  docs: {
    output: './src/sesv2/api.md',
    curl: true,
    baseUrl: 'https://sesv2.us-east-1.amazonaws.com',
  },
})
