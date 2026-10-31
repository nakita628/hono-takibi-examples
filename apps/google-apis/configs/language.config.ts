import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/language/v1beta1/openapi.yaml',
  output: './src/language/routes.ts',
  docs: {
    output: './src/language/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
