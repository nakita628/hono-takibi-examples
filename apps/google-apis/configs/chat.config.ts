import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/chat/v1/openapi.yaml',
  output: './src/chat/routes.ts',
  docs: {
    output: './src/chat/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
