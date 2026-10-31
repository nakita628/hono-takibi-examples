import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/iam/v2/openapi.yaml',
  output: './src/iam/routes.ts',
  docs: {
    output: './src/iam/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
