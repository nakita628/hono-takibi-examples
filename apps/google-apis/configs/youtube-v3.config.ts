import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/youtube/v3/openapi.yaml',
  output: './src/youtube-v3/routes.ts',
  docs: {
    output: './src/youtube-v3/api.md',
    curl: true,
    baseUrl: 'https://youtube.googleapis.com',
  },
})
