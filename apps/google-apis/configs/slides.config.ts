import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/slides/v1/openapi.yaml',
  output: './src/slides/routes.ts',
  docs: {
    output: './src/slides/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
