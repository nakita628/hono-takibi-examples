import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/people/v1/openapi.yaml',
  output: './src/people/routes.ts',
  docs: {
    output: './src/people/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
