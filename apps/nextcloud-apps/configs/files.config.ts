import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/files/openapi.json',
  output: './src/files/routes.ts',
  docs: {
    output: './src/files/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
