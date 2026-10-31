import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/classroom/v1/openapi.yaml',
  output: './src/classroom/routes.ts',
  docs: {
    output: './src/classroom/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
