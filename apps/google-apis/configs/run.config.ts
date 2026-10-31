import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/run/v2/openapi.yaml',
  output: './src/run/routes.ts',
  docs: {
    output: './src/run/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
