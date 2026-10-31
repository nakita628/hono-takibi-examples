import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/forms/v1/openapi.yaml',
  output: './src/forms/routes.ts',
  docs: {
    output: './src/forms/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
