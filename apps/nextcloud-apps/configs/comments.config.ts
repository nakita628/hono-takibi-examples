import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/comments/openapi.json',
  output: './src/comments/routes.ts',
  docs: {
    output: './src/comments/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
