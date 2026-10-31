import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/files_trashbin/openapi.json',
  output: './src/files-trashbin/routes.ts',
  docs: {
    output: './src/files-trashbin/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
