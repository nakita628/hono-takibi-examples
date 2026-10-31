import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/viewer/openapi.json',
  output: './src/viewer/routes.ts',
  docs: {
    output: './src/viewer/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
