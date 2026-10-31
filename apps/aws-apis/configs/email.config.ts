import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/email/2010-12-01/openapi.yaml',
  output: './src/email/routes.ts',
  docs: {
    output: './src/email/api.md',
    curl: true,
    baseUrl: 'https://email.us-east-1.amazonaws.com',
  },
})
