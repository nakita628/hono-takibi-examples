import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/workflowengine/openapi-full.json',
  output: './src/workflowengine/routes.ts',
  docs: {
    output: './src/workflowengine/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
