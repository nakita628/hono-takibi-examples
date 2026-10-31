import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/youtubeAnalytics/v1/openapi.yaml',
  output: './src/youtubeanalytics/routes.ts',
  docs: {
    output: './src/youtubeanalytics/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
