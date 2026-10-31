import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/federation/openapi-full.json',
  output: './src/federation/routes.ts',
  docs: {
    output: './src/federation/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
