import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/webhook_listeners/openapi.json',
  output: './src/webhook-listeners/routes.ts',
  docs: {
    output: './src/webhook-listeners/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
