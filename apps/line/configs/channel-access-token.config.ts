import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/line/line-openapi/main/channel-access-token.yml',
  output: './src/channel-access-token/routes.ts',
  docs: {
    output: './src/channel-access-token/api.md',
    curl: true,
    baseUrl: 'https://api.line.me',
  },
})
