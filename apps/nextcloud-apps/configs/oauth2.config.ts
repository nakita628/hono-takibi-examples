import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/oauth2/openapi.json',
  output: './src/oauth2/routes.ts',
  docs: {
    output: './src/oauth2/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
