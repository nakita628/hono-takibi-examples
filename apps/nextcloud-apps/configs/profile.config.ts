import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/profile/openapi.json',
  output: './src/profile/routes.ts',
  docs: {
    output: './src/profile/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
