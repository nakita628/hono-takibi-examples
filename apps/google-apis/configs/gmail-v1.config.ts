import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/gmail/v1/openapi.yaml',
  output: './src/gmail-v1/routes.ts',
  docs: {
    output: './src/gmail-v1/api.md',
    curl: true,
    baseUrl: 'https://gmail.googleapis.com',
  },
})
