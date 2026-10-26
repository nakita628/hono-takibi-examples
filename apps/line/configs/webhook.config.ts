import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/line/line-openapi/main/webhook.yml',
  output: './src/webhook/routes.ts',
  docs: {
    output: './src/webhook/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
