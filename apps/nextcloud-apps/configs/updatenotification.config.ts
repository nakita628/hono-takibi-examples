import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/updatenotification/openapi.json',
  output: './src/updatenotification/routes.ts',
  docs: {
    output: './src/updatenotification/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
