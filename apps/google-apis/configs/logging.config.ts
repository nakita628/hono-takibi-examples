import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/logging/v2/openapi.yaml',
  output: './src/logging/routes.ts',
  docs: {
    output: './src/logging/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
