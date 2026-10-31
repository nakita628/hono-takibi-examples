import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/settings/openapi-full.json',
  output: './src/settings/routes.ts',
  docs: {
    output: './src/settings/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
