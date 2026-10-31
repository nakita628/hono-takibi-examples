import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/cloud_federation_api/openapi.json',
  output: './src/cloud-federation-api/routes.ts',
  docs: {
    output: './src/cloud-federation-api/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
