import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/youtubereporting/v1/openapi.yaml',
  output: './src/youtubereporting/routes.ts',
  docs: {
    output: './src/youtubereporting/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
