import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/sns/2010-03-31/openapi.yaml',
  output: './src/sns/routes.ts',
  docs: {
    output: './src/sns/api.md',
    curl: true,
    baseUrl: 'https://sns.us-east-1.amazonaws.com',
  },
})
