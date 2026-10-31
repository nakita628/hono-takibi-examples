import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/dav/openapi.json',
  output: './src/dav/routes.ts',
  docs: {
    output: './src/dav/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
