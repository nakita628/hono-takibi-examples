import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/line/line-openapi/main/liff.yml',
  output: './src/liff/routes.ts',
  docs: {
    output: './src/liff/api.md',
    curl: true,
    baseUrl: 'https://api.line.me/',
  },
})
