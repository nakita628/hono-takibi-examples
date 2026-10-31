import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/monitoring/v1/openapi.yaml',
  output: './src/monitoring/routes.ts',
  docs: {
    output: './src/monitoring/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
