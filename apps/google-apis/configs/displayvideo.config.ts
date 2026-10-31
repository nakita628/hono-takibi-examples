import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/displayvideo/v2/openapi.yaml',
  output: './src/displayvideo/routes.ts',
  docs: {
    output: './src/displayvideo/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
