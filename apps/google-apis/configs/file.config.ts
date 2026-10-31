import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/file/v1/openapi.yaml',
  output: './src/file/routes.ts',
  docs: {
    output: './src/file/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
