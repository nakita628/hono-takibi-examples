import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/mirror/v1/openapi.yaml',
  output: './src/mirror/routes.ts',
  docs: {
    output: './src/mirror/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
