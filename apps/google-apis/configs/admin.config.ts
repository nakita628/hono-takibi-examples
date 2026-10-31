import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/admin/directory_v1/openapi.yaml',
  output: './src/admin/routes.ts',
  docs: {
    output: './src/admin/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
