import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/sharebymail/openapi.json',
  output: './src/sharebymail/routes.ts',
  docs: {
    output: './src/sharebymail/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
