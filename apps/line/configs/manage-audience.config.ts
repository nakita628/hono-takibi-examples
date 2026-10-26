import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/line/line-openapi/main/manage-audience.yml',
  output: './src/manage-audience/routes.ts',
  docs: {
    output: './src/manage-audience/api.md',
    curl: true,
    baseUrl: 'https://api.line.me',
  },
})
