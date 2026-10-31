import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/transcoder/v1/openapi.yaml',
  output: './src/transcoder/routes.ts',
  docs: {
    output: './src/transcoder/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
