import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/dlp/v2/openapi.yaml',
  output: './src/dlp/routes.ts',
  docs: {
    output: './src/dlp/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
