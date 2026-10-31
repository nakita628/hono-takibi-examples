import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/theming/openapi.json',
  output: './src/theming/routes.ts',
  docs: {
    output: './src/theming/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
