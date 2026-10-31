import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/systemtags/openapi.json',
  output: './src/systemtags/routes.ts',
  docs: {
    output: './src/systemtags/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
