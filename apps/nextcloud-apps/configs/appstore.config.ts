import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/appstore/openapi.json',
  output: './src/appstore/routes.ts',
  docs: {
    output: './src/appstore/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
