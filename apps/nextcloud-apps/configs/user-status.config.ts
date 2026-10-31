import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/user_status/openapi.json',
  output: './src/user-status/routes.ts',
  docs: {
    output: './src/user-status/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
