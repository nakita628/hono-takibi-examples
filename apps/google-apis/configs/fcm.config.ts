import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/fcm/v1/openapi.yaml',
  output: './src/fcm/routes.ts',
  docs: {
    output: './src/fcm/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
