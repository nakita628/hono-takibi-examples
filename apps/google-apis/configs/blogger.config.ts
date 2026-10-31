import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/blogger/v3/openapi.yaml',
  output: './src/blogger/routes.ts',
  docs: {
    output: './src/blogger/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
