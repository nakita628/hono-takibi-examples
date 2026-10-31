import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/files_sharing/openapi.json',
  output: './src/files-sharing/routes.ts',
  docs: {
    output: './src/files-sharing/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
