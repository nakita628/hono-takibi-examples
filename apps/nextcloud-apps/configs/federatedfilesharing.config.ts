import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/federatedfilesharing/openapi.json',
  output: './src/federatedfilesharing/routes.ts',
  docs: {
    output: './src/federatedfilesharing/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
