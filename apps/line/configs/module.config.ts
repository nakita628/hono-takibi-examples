import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/line/line-openapi/main/module.yml',
  output: './src/module/routes.ts',
  docs: {
    output: './src/module/api.md',
    curl: true,
    baseUrl: 'https://api.line.me',
  },
})
