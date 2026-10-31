import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/tasks/v1/openapi.yaml',
  output: './src/tasks/routes.ts',
  docs: {
    output: './src/tasks/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
