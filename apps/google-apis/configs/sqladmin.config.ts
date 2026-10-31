import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/sqladmin/v1/openapi.yaml',
  output: './src/sqladmin/routes.ts',
  docs: {
    output: './src/sqladmin/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
