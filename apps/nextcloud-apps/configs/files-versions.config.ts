import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/files_versions/openapi.json',
  output: './src/files-versions/routes.ts',
  docs: {
    output: './src/files-versions/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
