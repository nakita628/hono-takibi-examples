import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/cloudfront/2020-05-31/openapi.yaml',
  output: './src/cloudfront/routes.ts',
  docs: {
    output: './src/cloudfront/api.md',
    curl: true,
    baseUrl: 'https://cloudfront.us-east-1.amazonaws.com',
  },
})
