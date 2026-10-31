import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/provisioning_api/openapi-full.json',
  output: './src/provisioning-api/routes.ts',
  docs: {
    output: './src/provisioning-api/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
