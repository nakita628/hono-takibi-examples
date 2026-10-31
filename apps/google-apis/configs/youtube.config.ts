import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/youtube/v3/openapi.yaml',
  output: './src/youtube/routes.ts',
  docs: {
    output: './src/youtube/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
