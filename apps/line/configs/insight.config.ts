import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/line/line-openapi/main/insight.yml',
  output: './src/insight/routes.ts',
  docs: {
    output: './src/insight/api.md',
    curl: true,
    baseUrl: 'https://api.line.me',
  },
})
