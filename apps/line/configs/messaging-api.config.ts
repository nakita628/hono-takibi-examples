import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/line/line-openapi/main/messaging-api.yml',
  output: './src/messaging-api/routes.ts',
  docs: {
    output: './src/messaging-api/api.md',
    curl: true,
    baseUrl: 'https://api.line.me',
  },
})
