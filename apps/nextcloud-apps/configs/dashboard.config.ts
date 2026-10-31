import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/dashboard/openapi.json',
  output: './src/dashboard/routes.ts',
  docs: {
    output: './src/dashboard/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
