import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/cloudtasks/v2beta3/openapi.yaml',
  output: './src/cloudtasks/routes.ts',
  docs: {
    output: './src/cloudtasks/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
