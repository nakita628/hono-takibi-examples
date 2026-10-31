import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/iam/2010-05-08/openapi.yaml',
  output: './src/iam/routes.ts',
  docs: {
    output: './src/iam/api.md',
    curl: true,
    baseUrl: 'https://iam.us-east-1.amazonaws.com',
  },
})
