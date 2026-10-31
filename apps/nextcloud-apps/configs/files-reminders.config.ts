import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/files_reminders/openapi.json',
  output: './src/files-reminders/routes.ts',
  docs: {
    output: './src/files-reminders/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
