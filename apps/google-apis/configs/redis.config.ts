import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/redis/v1/openapi.yaml',
  output: './src/redis/routes.ts',
  docs: {
    output: './src/redis/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
