import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/gkebackup/v1/openapi.yaml',
  output: './src/gkebackup/routes.ts',
  docs: {
    output: './src/gkebackup/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
