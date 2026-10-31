import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/files_external/openapi.json',
  output: './src/files-external/routes.ts',
  docs: {
    output: './src/files-external/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
