import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/vision/v1p1beta1/openapi.yaml',
  output: './src/vision/routes.ts',
  docs: {
    output: './src/vision/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
