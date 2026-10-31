import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/batch/v1/openapi.yaml',
  output: './src/batch/routes.ts',
  docs: {
    output: './src/batch/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
