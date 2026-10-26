import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/line/line-openapi/main/module-attach.yml',
  output: './src/module-attach/routes.ts',
  docs: {
    output: './src/module-attach/api.md',
    curl: true,
    baseUrl: 'https://manager.line.biz',
  },
})
